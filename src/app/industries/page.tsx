import { Metadata } from 'next';
import Link from 'next/link';
import { getAllIndustries } from '@/lib/data';
import styles from '../page.shared.module.css';

export const metadata: Metadata = {
    title: 'Invoicing by Industry | DueBy',
    description: 'Invoicing tips and examples for contractors, freelancers, home services, and more. Built to match real workflows.',
};

export default function IndustriesPage() {
    const industries = getAllIndustries();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Invoicing by industry—examples and tips</h1>
            <p className={styles.subtitle}>
                Professional invoicing guides designed for your specific trade.
                Built to match real-world workflows and client expectations.
            </p>

            <div className={styles.grid}>
                {industries.map((industry) => (
                    <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        className={styles.card}
                    >
                        <h2 className={styles.cardName}>{industry.name}</h2>
                        <p className={styles.cardDesc}>{industry.description}</p>
                    </Link>
                ))}
            </div>

            <section className={styles.faqSection}>
                <h2 className={styles.sectionTitle}>FAQ</h2>
                <div className={styles.faqGrid}>
                    <div className={styles.faqItem}>
                        <h3>Why use industry-specific invoicing?</h3>
                        <p>It matches how clients in that industry expect to see services described and priced, ensuring fewer disputes and faster payments.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
