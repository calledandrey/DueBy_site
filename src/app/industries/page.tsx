import { Metadata } from 'next';
import Link from 'next/link';
import { getAllIndustries } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Invoice Templates by Industry | DueBy',
    description: 'Free professional invoice templates tailored for your specific trade or industry. Download in PDF, Word, Excel, and more.',
};

export default function IndustriesPage() {
    const industries = getAllIndustries();

    return (
        <div className="container">
            <header className={styles.header}>
                <h1 className={styles.title}>Invoice Templates by Industry</h1>
                <p className={styles.subtitle}>
                    Find the perfect invoice template designed specifically for your trade.
                    Professional, customizable, and free to use.
                </p>
            </header>

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
        </div>
    );
}
