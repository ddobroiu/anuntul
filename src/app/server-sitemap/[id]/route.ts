import { getAllArticles } from '@/lib/articles';
import { regions, categories } from '@/lib/data';
import { blogPosts } from '@/lib/blog-data';
import { JUDETE_FULL_DATA } from '@/lib/localitati';
import { getProducts } from '@/lib/products';

const BASE_URL = 'https://anuntul.info';

function generateUrlNode(url: string, priority: string, changefreq: string) {
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
}
export const dynamic = 'force-dynamic';

export async function GET(request: Request, props: any) {
    const params = await (props.params instanceof Promise ? props.params : props.params);
    const id = params?.id;

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    if (id === 'main') {
        const staticRoutes = [
            '', '/publicitate', '/seap', '/contact', '/comunicate', '/stiri', '/blog',
            '/trimite-comunicat', '/termeni', '/confidentialitate', '/judet'
        ];

        for (const route of staticRoutes) {
            xml += generateUrlNode(`${BASE_URL}${route}`, route === '' ? '1.0' : '0.8', 'daily');
        }

        // Regions
        for (const region of regions) {
            xml += generateUrlNode(`${BASE_URL}/regiune/${region.toLowerCase().replace(/ /g, '%20')}`, '0.6', 'weekly');
        }

        // Categories
        for (const category of categories) {
            xml += generateUrlNode(`${BASE_URL}/categorie/${category.toLowerCase()}`, '0.6', 'weekly');
        }

        // Articles
        const articles = await getAllArticles();
        for (const article of articles) {
            xml += generateUrlNode(`${BASE_URL}/stiri/${article.id}`, '0.5', 'monthly');
        }

        // Blog Posts
        for (const post of blogPosts) {
            xml += generateUrlNode(`${BASE_URL}/blog/${post.slug}`, '0.7', 'monthly');
        }

        // Judete entries
        for (const j of JUDETE_FULL_DATA) {
            xml += generateUrlNode(`${BASE_URL}/judet/${j.slug}`, '0.5', 'monthly');
        }

    } else {
        // Handle sharded/paged sitemaps for localities
        const [judetIndexStr, pagePartStr] = id.split('-');
        const judetIndex = parseInt(judetIndexStr);
        const pagePart = parseInt(pagePartStr || '0');

        const judet = JUDETE_FULL_DATA[judetIndex];

        if (judet) {
            if (pagePart === 0) {
                xml += generateUrlNode(`${BASE_URL}/judet/${judet.slug}`, '0.7', 'monthly');
            }

            const allProducts = await getProducts();
            const validSeoProducts = allProducts.filter((p: any) => (p.metadata?.isSeoCampaign || p.id?.startsWith('seo-')) && !p.id?.startsWith("fallback-"));
            const URLS_PER_LOC = validSeoProducts.length + 1;
            const LOCS_PER_SITEMAP = Math.floor(45000 / URLS_PER_LOC);

            const startLocIndex = pagePart * LOCS_PER_SITEMAP;
            const endLocIndex = startLocIndex + LOCS_PER_SITEMAP;
            const localitiesSlice = judet.localitati.slice(startLocIndex, endLocIndex);

            for (const loc of localitiesSlice) {
                // Locality main page
                xml += generateUrlNode(`${BASE_URL}/judet/${judet.slug}/${loc.slug}`, '0.7', 'monthly');

                // SEO products
                for (const p of validSeoProducts) {
                    xml += generateUrlNode(`${BASE_URL}/judet/${judet.slug}/${loc.slug}/${p.slug}`, '0.6', 'monthly');
                }
            }
        }
    }

    xml += `</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate'
        }
    });
}
