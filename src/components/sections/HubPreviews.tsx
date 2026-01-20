import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HubPreviews.module.css';
import { getAllIndustries } from '@/lib/data';

export function HubPreviews() {
    const industries = getAllIndustries().slice(0, 8);

    return (
        <div className="container">
            {/* Industries Section */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Tailored for your Trade</h2>
                        <p className={styles.description}>
                            Invoicing guides specifically designed for your industry.
                        </p>
                    </div>
                    <Link href="/industries" className={styles.viewAll}>
                        View all industries <ArrowRight size={16} />
                    </Link>
                </div>
                <div className={styles.grid}>
                    {industries.map((ind) => (
                        <Link key={ind.slug} href={`/industries/${ind.slug}`} className={styles.card}>
                            <h3 className={styles.cardTitle}>{ind.name}</h3>
                            <p className={styles.cardDesc}>Professional invoicing for {ind.name.toLowerCase()} services.</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
