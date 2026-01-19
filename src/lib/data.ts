import { Industry, TemplateFormat } from '@/types';
import industriesData from '../../data/industries.json';
import templatesData from '../../data/templates.json';

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
