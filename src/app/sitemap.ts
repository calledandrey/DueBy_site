import { MetadataRoute } from 'next';
import { getAllIndustries } from '@/lib/data';
import { getAllPostSlugs } from '@/lib/posts';

// Base URL - In production, this should be an env variable
const BASE_URL = 'https://dueby.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const industries = getAllIndustries();
    const guides = getAllPostSlugs();

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/invoice-generator',
        '/industries',
        '/resources',
        '/contact',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Industry Pages
    const industryRoutes = industries.map((ind) => ({
        url: `${BASE_URL}/industries/${ind.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // 3. Guide Pages
    const guideRoutes = guides.map((guide) => ({
        url: `${BASE_URL}/resources/guides/${guide.params.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        ...staticRoutes,
        ...industryRoutes,
        ...guideRoutes,
    ];
}
