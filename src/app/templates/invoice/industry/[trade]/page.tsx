import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllIndustries, getIndustryBySlug } from '@/lib/data';
import styles from './page.module.css';

export async function generateStaticParams() {
    const industries = getAllIndustries();
    return industries.map((industry) => ({
        trade: industry.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ trade: string }> }): Promise<Metadata> {
    const { trade } = await params;
    const industry = getIndustryBySlug(trade);

    if (!industry) {
        return { title: 'Template Not Found' };
    }

    return {
        title: `Free ${industry.name} Invoice Template | PDF, Word, Excel`,
        description: `Download free ${industry.name.toLowerCase()} invoice templates. customizable and ready to use in PDF, Word, Excel, and Google Docs formats.`,
    };
}

export default async function TemplateTradePage({ params }: { params: Promise<{ trade: string }> }) {
    const { trade } = await params;
    const industry = getIndustryBySlug(trade);

    if (!industry) {
        notFound();
    }

    return (
        <div className="container">
            <div className={styles.hero}>
                <h1 className={styles.title}>Free {industry.name} Invoice Template</h1>
                <p className={styles.subtitle}>
                    Professional, free-to-download invoice templates specifically designed for {industry.name.toLowerCase()} businesses.
                </p>
                <div className={styles.ctaGroup}>
                    <Link href="/invoice-generator" className={styles.primaryCta}>
                        Create {industry.name} Invoice
                    </Link>
                </div>
            </div>

            <div className={styles.editorPreview}>
                <div className={styles.previewCard}>
                    <div className={styles.previewHeader}>
                        <span>{industry.name} Invoice Example</span>
                    </div>
                    <div className={styles.visualPreview}>
                        {/* Mock Visual of an Invoice */}
                        <div className={styles.invoiceMockup}>
                            <div className={styles.mockHeader}>
                                <div className={styles.mockLogo}>Logo</div>
                                <div className={styles.mockTitle}>INVOICE</div>
                            </div>
                            <div className={styles.mockRow}></div>
                            <div className={styles.mockRow}></div>
                            <div className={styles.mockRow}></div>
                            <div className={styles.mockTotal}>Total: $0.00</div>
                        </div>
                    </div>
                </div>

                <div className={styles.formats}>
                    <h3>Available Formats</h3>
                    <div className={styles.formatList}>
                        {['PDF', 'Word', 'Excel', 'Google Docs'].map(fmt => (
                            <button key={fmt} className={styles.formatBtn}>
                                Download {fmt}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className={styles.guideSection}>
                <h2>How to create a {industry.name.toLowerCase()} invoice</h2>
                <ol className={styles.steps}>
                    <li>Download the free {industry.name} invoice template above.</li>
                    <li>Add your business name, contact details, and logo.</li>
                    <li>List the services provided (e.g., specific {industry.name.toLowerCase()} tasks).</li>
                    <li>Add costs for labor and materials if applicable.</li>
                    <li>Send to your client as a PDF or print it out.</li>
                </ol>
            </section>
        </div>
    );
}
