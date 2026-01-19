export interface Industry {
    slug: string;
    name: string;
    meta_title: string;
    description: string;
    hero_title: string;
    hero_subtitle: string;
    why_need_section: {
        title: string;
        content: string;
    };
    what_to_include: string[];
    faq: {
        question: string;
        answer: string;
    }[];
}

export interface TemplateFormat {
    slug: string;
    name: string;
    icon: string; // Lucide icon name
    description: string;
}

export type InvoiceTemplate = {
    id: string;
    name: string;
    thumbnail: string;
};
