import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllTemplateFormats, getTemplateFormatBySlug } from '@/lib/data';
import styles from './page.module.css';

export async function generateStaticParams() {
    const formats = getAllTemplateFormats();
    return formats.map((format) => ({
        format: format.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ format: string }> }): Promise<Metadata> {
    const { format: formatSlug } = await params;
    const format = getTemplateFormatBySlug(formatSlug);

    if (!format) {
        return { title: 'Template Not Found' };
    }

    return {
        title: `Free ${format.name} Invoice Templates | Download Now`,
        description: `Download professional invoice templates in ${format.name} format. Customizable and free to use for your business.`,
    };
}

export default async function TemplateFormatPage({ params }: { params: Promise<{ format: string }> }) {
    const { format: formatSlug } = await params;
    const format = getTemplateFormatBySlug(formatSlug);

    if (!format) {
        notFound();
    }

    return (
        <div className="container">
            <div className={styles.hero}>
                <h1 className={styles.title}>Free {format.name} Invoice Templates</h1>
                <p className={styles.subtitle}>
                    Professional invoice templates designed for {format.name}.
                    Download, customize, and send to your clients in minutes.
                </p>
                <div className={styles.ctaGroup}>
                    <Link href="/invoice-generator" className={styles.primaryCta}>
                        Create Invoice Online
                    </Link>
                    <button className={styles.secondaryCta}>
                        Download {format.name} Template
                    </button>
                </div>
            </div>

            <div className={styles.previewSection}>
                <div className={styles.previewCard}>
                    <div className={styles.previewImage}>
                        {/* Placeholder for template visually */}
                        <span>{format.name} Template Preview</span>
                    </div>
                    <div className={styles.previewInfo}>
                        <h3>Standard Invoice Template</h3>
                        <p>Clean and professional layout perfect for any business.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
