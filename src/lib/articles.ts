import { Article, dummyArticles } from '@/lib/data';
import { getHotNewsArticles } from '@/lib/rss';
import { getLocalPdfArticles } from '@/lib/local-files';

/** Slug-uri vechi → id canonic (TO-TI CONSTRUCT) */
const ARTICLE_ID_ALIASES: Record<string, string> = {
    'pdf-Model-Comunicat-de-Presa-PNRR-Incepere-Proiect': 'digitalizare-to-ti-construct-srl',
    'pdf-Model-Comunicat-de-Presa-PNRR-Incepere-Proiect.pdf': 'digitalizare-to-ti-construct-srl',
    'pdf-DIGITALIZAREA-SOCIETATII-TO-TI-CONSTRUCT-SRL.pdf': 'digitalizare-to-ti-construct-srl',
    'pdf-DIGITALIZAREA-SOCIETATII-TO-TI-CONSTRUCT-SRL': 'digitalizare-to-ti-construct-srl',
    'pdf-ANYATRAVEL_SRL_finalizare_proiect': 'anyatravel-srl-finalizare-proiect',
    'pdf-Comunicat_de_presa_finalizare_ROYAL_COLORS_PAINTING_S.R.L._': 'royal-colors-painting-finalizare',
    'pdf-Comunicat_de_presa_finalizare_ROYAL_COLORS_PAINTING_S.R.L.,': 'royal-colors-painting-finalizare',
};

// Cache mechanism could be added here for efficiency
let cachedArticles: Article[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL = 60000; // 1 minute (reduced for updates)

export async function getAllArticles(): Promise<Article[]> {
    const now = Date.now();

    if (cachedArticles && (now - lastFetchTime < CACHE_TTL)) {
        return cachedArticles;
    }

    try {
        const [hotNews, localPdfs] = await Promise.all([
            getHotNewsArticles(),
            getLocalPdfArticles()
        ]);

        // Prioritize: Dummy (Manual) -> HotNews -> Local PDFs
        const combined = [...dummyArticles, ...hotNews, ...localPdfs];
        
        // Deduplicate by pdfUrl to avoid duplicates between manual and auto-detected pdfs
        const seenPdfs = new Set<string>();
        cachedArticles = combined.filter(article => {
            if (!article.pdfUrl) return true;
            if (seenPdfs.has(article.pdfUrl)) return false;
            seenPdfs.add(article.pdfUrl);
            return true;
        });
        
        lastFetchTime = now;
    } catch (error) {
        console.error("Failed to fetch articles", error);
        // try to at least get local pdfs if rss fails
        try {
            const localPdfs = await getLocalPdfArticles();
            const combined = [...dummyArticles, ...localPdfs];
            const seenPdfs = new Set<string>();
            cachedArticles = combined.filter(article => {
                if (!article.pdfUrl) return true;
                if (seenPdfs.has(article.pdfUrl)) return false;
                seenPdfs.add(article.pdfUrl);
                return true;
            });
        } catch (e) {
            cachedArticles = dummyArticles;
        }
    }

    return cachedArticles || dummyArticles;
}

export async function getArticleById(id: string): Promise<Article | undefined> {
    const resolvedId = ARTICLE_ID_ALIASES[id] ?? id;
    const articles = await getAllArticles();
    return articles.find((a) => a.id === resolvedId);
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
    const articles = await getAllArticles();
    return articles.filter((a) => a.category.toLowerCase() === category.toLowerCase());
}

export async function getArticlesByRegion(region: string): Promise<Article[]> {
    const articles = await getAllArticles();
    return articles.filter((a) => a.region.toLowerCase() === region.toLowerCase());
}

export async function searchArticles(query: string): Promise<Article[]> {
    const articles = await getAllArticles();
    const q = query.toLowerCase();
    return articles.filter((a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.region.toLowerCase().includes(q)
    );
}
