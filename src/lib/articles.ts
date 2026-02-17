import { Article, dummyArticles } from '@/lib/data';
import { getHotNewsArticles } from '@/lib/rss';
import { getLocalPdfArticles } from '@/lib/local-files';

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

        // Prioritize: HotNews -> Local PDFs -> Dummy
        // We might want local PDFs to be quite visible, maybe in 'comunicate' particularly
        cachedArticles = [...hotNews, ...localPdfs, ...dummyArticles];
        lastFetchTime = now;
    } catch (error) {
        console.error("Failed to fetch articles", error);
        // try to at least get local pdfs if rss fails
        try {
            const localPdfs = await getLocalPdfArticles();
            cachedArticles = [...localPdfs, ...dummyArticles];
        } catch (e) {
            cachedArticles = dummyArticles;
        }
    }

    return cachedArticles || dummyArticles;
}

export async function getArticleById(id: string): Promise<Article | undefined> {
    const articles = await getAllArticles();
    return articles.find((a) => a.id === id);
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
    const articles = await getAllArticles();
    return articles.filter((a) => a.category.toLowerCase() === category.toLowerCase());
}

export async function getArticlesByRegion(region: string): Promise<Article[]> {
    const articles = await getAllArticles();
    return articles.filter((a) => a.region.toLowerCase() === region.toLowerCase());
}
