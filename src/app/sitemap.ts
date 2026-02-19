
import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
import { regions, categories } from '@/lib/data';
import { blogPosts } from '@/lib/blog-data';

const BASE_URL = 'https://anuntul.net';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articles = await getAllArticles();

    // 1. Static Routes
    const staticRoutes: MetadataRoute.Sitemap = [
        '',
        '/publicitate',
        '/seap',
        '/contact',
        '/comunicate',
        '/stiri',
        '/blog',
        '/trimite-comunicat',
        '/termeni',
        '/confidentialitate',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Dynamic Regions
    const regionRoutes: MetadataRoute.Sitemap = regions.map((region) => ({
        url: `${BASE_URL}/regiune/${region.toLowerCase().replace(/ /g, '%20')}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    // 3. Dynamic Categories
    const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
        url: `${BASE_URL}/categorie/${category.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    // 4. Dynamic Articles
    const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
        url: `${BASE_URL}/stiri/${article.id}`,
        lastModified: new Date(article.date.split('.').reverse().join('-')),
        changeFrequency: 'monthly',
        priority: 0.5,
    }));

    // 5. Blog Posts
    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.publishDate),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...regionRoutes, ...categoryRoutes, ...articleRoutes, ...blogRoutes];
}
