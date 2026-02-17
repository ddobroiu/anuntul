import Parser from 'rss-parser';
import { Article } from '@/lib/data';

const parser = new Parser({
    customFields: {
        item: [
            ['content:encoded', 'contentEncoded'],
            ['category', 'categories', { keepArray: true }]
        ]
    }
});

export async function getHotNewsArticles(): Promise<Article[]> {
    try {
        const feed = await parser.parseURL('https://www.hotnews.ro/rss');

        // Map RSS items to our Article structure
        const articles: Article[] = feed.items.map((item) => {

            // 1. Determine Region (Basic keyword matching)
            let region = 'National';
            const lowerTitle = (item.title || '').toLowerCase();
            const lowerDesc = (item.contentSnippet || '').toLowerCase();

            if (lowerTitle.includes('bucuresti') || lowerDesc.includes('bucuresti')) region = 'Bucuresti-Ilfov';
            else if (lowerTitle.includes('cluj')) region = 'Nord-Vest';
            else if (lowerTitle.includes('iasi')) region = 'Nord-Est';
            else if (lowerTitle.includes('timisoara')) region = 'Vest';
            else if (lowerTitle.includes('brasov') || lowerTitle.includes('sibiu')) region = 'Centru';
            else if (lowerTitle.includes('constanta')) region = 'Sud-Est';
            else if (lowerTitle.includes('craiova')) region = 'Sud-Vest Oltenia';

            // 2. Determine Category
            let category = 'Actualitate';
            // HotNews categories are usually strings in an array
            if (item.categories && Array.isArray(item.categories) && item.categories.length > 0) {
                // Find the first relevant category
                const cat = item.categories.find(c => typeof c === 'string') || '';

                if (cat.includes('Politic')) category = 'Politic';
                else if (cat.includes('Economie') || cat.includes('Finante')) category = 'Economic';
                else if (cat.includes('Sport')) category = 'Sport';
                else if (cat.includes('Life') || cat.includes('Monden')) category = 'Monden';
                else if (cat.includes('Cultura')) category = 'Cultura';
                else if (cat.includes('Social')) category = 'Social';
            }

            // 3. Extract Image
            // Default image
            let imageUrl = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop';

            // Try to find image in content:encoded or description
            const content = item.contentEncoded || item.content || item.contentSnippet || '';
            const imgRegex = /<img[^>]+src="([^">]+)"/g;
            const match = imgRegex.exec(content);

            if (match && match[1]) {
                imageUrl = match[1];
            } else if (item.enclosure && item.enclosure.url) {
                imageUrl = item.enclosure.url;
            }

            // 4. Generate a clean ID
            // Try to extract numeric ID from HotNews URL (e.g. ...-123456.htm)
            let id = '';
            const link = item.link || item.guid || '';
            const idMatch = link.match(/-(\d+)\.htm/);

            if (idMatch && idMatch[1]) {
                id = idMatch[1];
            } else {
                // Fallback: Deterministic slug from title (NO RANDOMNESS)
                // We use the title + a short hash of the link to ensure uniqueness without randomness
                const simpleSlug = (item.title || 'untitled').toLowerCase()
                    .replace(/ă/g, 'a').replace(/â/g, 'a').replace(/î/g, 'i').replace(/ș/g, 's').replace(/ț/g, 't')
                    .replace(/[^a-z0-9]/g, '-')
                    .replace(/-+/g, '-')
                    .replace(/^-|-$/g, '');

                // Simple hash of string to keep it short but unique
                let hash = 0;
                const str = link || item.title || '';
                for (let i = 0; i < str.length; i++) {
                    hash = ((hash << 5) - hash) + str.charCodeAt(i);
                    hash |= 0; // Convert to 32bit integer
                }
                const suffix = Math.abs(hash).toString(36);

                id = `${simpleSlug}-${suffix}`;
            }

            return {
                id: id,
                title: item.title || 'Titlu Indisponibil',
                excerpt: (item.contentSnippet || item.content || '').substring(0, 160) + '...',
                content: item.contentEncoded || item.content || '',
                category: category,
                region: region,
                date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('ro-RO') : new Date().toLocaleDateString('ro-RO'),
                imageUrl: imageUrl,
                isFeatured: false,
            };
        });

        // Add a small delay/limit to not spam if this function is called specifically
        return articles.slice(0, 12);
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return [];
    }
}
