import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
export async function generateMetadata({ params }: { params: Promise<{ trade: string }> }): Promise<Metadata> {
    const { trade } = await params;
    const industry = getIndustryBySlug(trade);

    if (!industry) {
        return {
            title: 'Industry Not Found',
        };
    }

    return {
        title: industry.title || industry.meta_title,
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
            <header className={styles.hero}>
                <h1 className={styles.title}>{industry.h1 || industry.hero_title}</h1>
                <p className={styles.subtitle}>
                    {industry.description}
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
                </div>
            </header>

            {industry.scenarios && (
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Common invoicing scenarios</h2>
                    <ul className={styles.checklist}>
                        {industry.scenarios.map((item: any, idx: number) => (
                            <li key={idx} className={styles.checklistItem}>
                                <span className={styles.checkIcon}>→</span> {item}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>What to include on your {industry.name} invoice</h2>
                <div className={styles.grid2Col}>
                    <div>
                        <h3 className={styles.h3}>Common line items</h3>
                        <ul className={styles.checklist}>
                            {(industry.line_items || industry.what_to_include || []).map((item: any, idx: number) => (
                                <li key={idx} className={styles.checklistItem}>
                                    <span className={styles.checkIcon}>✓</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {industry.tips && (
                        <div>
                            <h3 className={styles.h3}>Pro tips</h3>
                            <ul className={styles.checklist}>
                                {industry.tips.map((item: any, idx: number) => (
                                    <li key={idx} className={styles.checklistItem}>
                                        <span className={styles.checkIcon}>★</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>FAQ</h2>
                <div className={styles.faqGrid}>
                    {(industry.faq || []).map((item: any, index: number) => (
                        <div key={index} className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>{item.q || item.question}</h3>
                            <p className={styles.faqAnswer}>{item.a || item.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className={styles.footerLinks}>
                <Link href="/industries">← All Industries</Link>
                <a href="https://apps.apple.com/us/app/invoice-generator/id6742449153" target="_blank" rel="noopener noreferrer">Download App →</a>
            </div>
        </div>
    );
}
