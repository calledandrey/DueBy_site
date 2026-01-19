import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllIndustries, getIndustryBySlug } from '@/lib/data';
import styles from './page.module.css';

// Generate static params for all industries at build time
export async function generateStaticParams() {
    const industries = getAllIndustries();
    return industries.map((industry) => ({
        trade: industry.slug,
    }));
}

// Generate dynamic metadata
// Generate dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ trade: string }> }): Promise<Metadata> {
    const { trade } = await params;
    const industry = getIndustryBySlug(trade);

    if (!industry) {
        return {
            title: 'Industry Not Found',
        };
    }

    return {
        title: industry.meta_title,
        description: industry.description,
    };
}

export default async function IndustryPage({ params }: { params: Promise<{ trade: string }> }) {
    const { trade } = await params;
    const industry = getIndustryBySlug(trade);

    if (!industry) {
        notFound();
    }

    return (
        <div className="container">
            <div className={styles.hero}>
                <h1 className={styles.title}>{industry.hero_title}</h1>
                <p className={styles.subtitle}>
                    {industry.hero_subtitle}
                </p>
                <div className={styles.ctaGroup}>
                    <Link href="/invoice-generator" className={styles.primaryCta}>
                        Create Invoice Now
                    </Link>
                    <a href="#templates" className={styles.secondaryCta}>
                        Download Templates
                    </a>
                </div>
            </div>

            <section className={styles.section}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>{industry.why_need_section.title}</h2>
                    <p>{industry.why_need_section.content}</p>
                </div>
            </section>

            <section id="templates" className={styles.section} style={{ backgroundColor: 'var(--background-secondary)' }}>
                <h2 className={styles.sectionTitle}>Free {industry.name} Invoice Templates</h2>
                <p className={styles.sectionText}>
                    Select a format to download your free template.
                </p>

                <div className={styles.formatGrid}>
                    {['PDF', 'Word', 'Excel'].map(format => (
                        <div key={format} className={styles.formatCard}>
                            <h3>{format}</h3>
                            <p>Download {industry.name} Invoice in {format}</p>
                            <button className={styles.downloadBtn}>Download</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>What to Include in a {industry.name} Invoice</h2>
                <ul className={styles.checklist}>
                    {industry.what_to_include.map((item, index) => (
                        <li key={index} className={styles.checklistItem}>
                            <span className={styles.checkIcon}>✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.section} style={{ marginBottom: '4rem' }}>
                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                <div className={styles.faqGrid}>
                    {industry.faq.map((item, index) => (
                        <div key={index} className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>{item.question}</h3>
                            <p className={styles.faqAnswer}>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
