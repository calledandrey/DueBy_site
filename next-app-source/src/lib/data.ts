import { Industry, TemplateFormat, Feature, BlogPost } from '@/types';
import industriesData from '../../data/industries.json';
import templatesData from '../../data/templates.json';
import featuresData from '../../data/features.json';
import blogData from '../../data/blog.json';

export function getAllIndustries(): Industry[] {
    return industriesData as Industry[];
}

export function getIndustryBySlug(slug: string): Industry | undefined {
    return getAllIndustries().find((ind) => ind.slug === slug);
}

export function getAllTemplateFormats(): TemplateFormat[] {
    return templatesData as TemplateFormat[];
}

export function getTemplateFormatBySlug(slug: string): TemplateFormat | undefined {
    return getAllTemplateFormats().find((fmt) => fmt.slug === slug);
}

export function getAllFeatures(): Feature[] {
    return featuresData as Feature[];
}

export function getFeatureBySlug(slug: string): Feature | undefined {
    return getAllFeatures().find((f) => f.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
    return blogData as BlogPost[];
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return getAllBlogPosts().find((p) => p.slug === slug);
}
