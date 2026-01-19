import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllFeatures, getFeatureBySlug } from '@/lib/data';
import styles from './page.module.css';

export async function generateStaticParams() {
    const features = getAllFeatures();
    return features.map((f) => ({
        slug: f.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const feature = getFeatureBySlug(slug);

    if (!feature) {
        return { title: 'Feature Not Found' };
    }

    return {
        title: feature.title,
        description: feature.meta,
    };
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const feature = getFeatureBySlug(slug);

    if (!feature) {
        notFound();
    }

    return (
        <div className="container">
            <header className={styles.hero}>
                <h1 className={styles.title}>{feature.h1}</h1>
                <p className={styles.subtitle}>{feature.description}</p>
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

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Key Benefits</h2>
                <div className={styles.benefitsGrid}>
                    {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className={styles.benefitCard}>
                            <span className={styles.checkIcon}>✓</span>
                            <p>{benefit}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.faqSection}>
                <h2 className={styles.sectionTitle}>FAQ</h2>
                <div className={styles.faqGrid}>
                    {feature.faq.map((item, idx) => (
                        <div key={idx} className={styles.faqItem}>
                            <h3>{item.q}</h3>
                            <p>{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className={styles.footerLinks}>
                <Link href="/">← Back to Home</Link>
                <a href="https://apps.apple.com/us/app/invoice-generator/id6742449153" target="_blank" rel="noopener noreferrer">Download App →</a>
            </div>
        </div>
    );
}
