import { MetadataRoute } from 'next';
import { judete } from '@/lib/judete';
import { regions } from '@/lib/data';

// Dummy implementation for fetching articles/projects from DB.
// Hardcoded to match the dummy state on the site.
import { dummyArticles } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://anuntul.info';

  // Core Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/comunicate`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/stiri`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seap`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/regiuni`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termeni`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/confidentialitate`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politica-cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  ];

  // Programmatic SEO for Counties (Județe)
  const judeteRoutes: MetadataRoute.Sitemap = judete.map((judet) => ({
    url: `${baseUrl}/comunicate-de-presa/${judet.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Programmatic SEO for Regions
  const regionRoutes: MetadataRoute.Sitemap = regions.map((region) => ({
    url: `${baseUrl}/regiune/${region.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Articles & News
  const articleRoutes: MetadataRoute.Sitemap = dummyArticles.map((article) => {
    return {
      url: `${baseUrl}/stiri/${article.id}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...judeteRoutes, ...regionRoutes, ...articleRoutes];
}
