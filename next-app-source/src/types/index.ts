export interface Industry {
    slug: string;
    name: string;
    title?: string;
    meta_title: string;
    description: string;
    h1?: string;
    hero_title: string;
    hero_subtitle: string;
    why_need_section?: {
        title: string;
        content: string;
    };
    what_to_include?: string[];
    scenarios?: string[];
    line_items?: string[];
    structure?: string[];
    tips?: string[];
    faq: {
        question?: string;
        answer?: string;
        q?: string;
        a?: string;
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

export interface Feature {
    slug: string;
    name: string;
    title: string;
    meta: string;
    h1: string;
    description: string;
    benefits: string[];
    faq: { q: string, a: string }[];
}

export interface BlogPost {
    slug: string;
    title: string;
    meta: string;
    summary: string;
    h1: string;
    sections: { h2: string, content: string }[];
    faq: { q: string, a: string }[];
}
