import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllTemplateFormats, getTemplateFormatBySlug } from '@/lib/data';
import styles from './page.module.css';

export async function generateStaticParams() {
    const formats = getAllTemplateFormats();
    return formats.map((format) => ({
        format: format.slug,
    }));
}

const formatContent: Record<string, any> = {
    pdf: {
        title: 'Free PDF Invoice Template | DueBy',
        meta: 'Download a free PDF invoice template. Clean layout, print-ready, easy to fill in and send to clients.',
        h1: 'Free PDF invoice template (print-ready).',
        sections: [
            {
                h2: 'When to use a PDF invoice template',
                content: 'PDFs are ideal for the final version of your invoice. They ensure consistent formatting across all devices and are easy to send via email or WhatsApp.'
            },
            {
                h2: 'What to include in a PDF invoice',
                content: 'Ensure your PDF includes: invoice number, dates, seller/buyer details, line items, tax totals, terms, and payment instructions.'
            },
            {
                h2: 'Common mistakes to avoid',
                content: 'Avoid missing due dates, unclear line items, or incorrect tax totals. Always double-check your payment details before exporting.'
            }
        ],
        faq: [
            { q: 'How do I edit a PDF invoice?', a: 'Use a PDF editor, or generate the invoice in DueBy and export directly to PDF.' },
            { q: 'Can I print it?', a: 'Yes—our PDF templates are A4 and Letter friendly and print-ready.' }
        ]
    },
    word: {
        title: 'Free Word Invoice Template (DOC/DOCX) | DueBy',
        meta: 'Download a Word invoice template you can fully customize—logo, fonts, layout, and line items.',
        h1: 'Free Word invoice template you can customize.',
        sections: [
            {
                h2: 'When to use a Word invoice template',
                content: 'Word is best when you need full control over the design, including custom fonts and unique branding elements.'
            },
            {
                h2: 'How to edit your Word template',
                content: 'Open the .docx file, replace the placeholder text with your business info, and add your logo using the "Insert Image" feature.'
            }
        ],
        faq: [
            { q: 'How to add my logo?', a: 'Go to Insert > Pictures and select your logo file.' },
            { q: 'How to keep totals correct?', a: 'You must manually calculate totals in Word; consider Excel if you have many line items.' }
        ]
    },
    excel: {
        title: 'Free Excel Invoice Template (XLS/XLSX) | DueBy',
        meta: 'Download an Excel invoice template with automatic subtotals and totals. Great for itemized work and calculations.',
        h1: 'Free Excel invoice template with built-in totals.',
        sections: [
            {
                h2: 'Best for calculations',
                content: 'Excel is the power choice for businesses with complex invoices involving many items, taxes, or discounts.'
            },
            {
                h2: 'Suggested columns',
                content: 'We recommend columns for Date, Description, Quantity, Unit Price, and Total for each line item.'
            }
        ],
        faq: [
            { q: 'Can I add multi-tax lines?', a: 'Yes—simply add new rows for different tax rates and update your sum formula.' },
            { q: 'How to handle rounding?', a: 'Use Excel built-in ROUND functions to ensure your totals match your accounting records.' }
        ]
    },
    'google-docs': {
        title: 'Free Google Docs Invoice Template | DueBy',
        meta: 'Copy a free Google Docs invoice template. Edit online, share easily, and keep a simple invoice workflow.',
        h1: 'Free Google Docs invoice template (online editing).',
        sections: [
            {
                h2: 'Copy & edit online',
                content: 'No software required—simply copy our template to your Google Drive and start invoicing from any browser.'
            },
            {
                h2: 'Share with ease',
                content: 'Use Google "Share" feature to let clients view or comment, or download as PDF for a formal send.'
            }
        ],
        faq: [
            { q: 'How to export to PDF?', a: 'Go to File > Download > PDF Document.' },
            { q: 'Can multiple people edit?', a: 'Yes—Google Docs allows real-time collaboration with your team or accountant.' }
        ]
    }
};

export async function generateMetadata({ params }: { params: Promise<{ format: string }> }): Promise<Metadata> {
    const { format: formatSlug } = await params;
    const content = formatContent[formatSlug] || {};

    return {
        title: content.title || 'Free Invoice Template',
        description: content.meta || 'Download free professional invoice templates.',
    };
}

export default async function TemplateFormatPage({ params }: { params: Promise<{ format: string }> }) {
    const { format: formatSlug } = await params;
    const format = getTemplateFormatBySlug(formatSlug);
    const content = formatContent[formatSlug];

    if (!format || !content) {
        notFound();
    }

    return (
        <div className="container">
            <header className={styles.hero}>
                <h1 className={styles.title}>{content.h1}</h1>
                <p className={styles.subtitle}>
                    {content.meta} Download, customize, and send to your clients in minutes.
                </p>
                <div className={styles.ctaGroup}>
                    <a
                        href="https://apps.apple.com/us/app/invoice-generator/id6742449153"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/app-store-badge.svg"
                            alt="Download on the App Store"
                            width={140}
                            height={42}
                            style={{ height: '42px', width: 'auto' }}
                        />
                    </a>
                    <button className={styles.secondaryCta}>
                        Download {format.name} Template
                    </button>
                </div>
            </header>

            <div className={styles.body}>
                {content.sections.map((section: any, idx: number) => (
                    <section key={idx} className={styles.contentSection}>
                        <h2>{section.h2}</h2>
                        <p>{section.content}</p>
                    </section>
                ))}

                <section className={styles.contentSection}>
                    <h2>Want faster invoicing?</h2>
                    <p>Generating invoices manually can be slow. Use the DueBy app to create, send, and track invoices in seconds on your mobile device.</p>
                    <a href="https://apps.apple.com/us/app/invoice-generator/id6742449153" target="_blank" rel="noopener noreferrer" className={styles.inlineCta}>Get the App →</a>
                </section>
            </div>

            <section className={styles.faqSection}>
                <h2 className={styles.h2}>FAQ</h2>
                <div className={styles.faqGrid}>
                    {content.faq.map((item: any, idx: number) => (
                        <div key={idx} className={styles.faqItem}>
                            <h3>{item.q}</h3>
                            <p>{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
