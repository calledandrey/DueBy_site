import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HubPreviews.module.css';
import { getAllIndustries, getAllTemplateFormats } from '@/lib/data';

export function HubPreviews() {
    const industries = getAllIndustries().slice(0, 8);
    const formats = getAllTemplateFormats();

    return (
        <div className="container">
            {/* Templates Section */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Free Invoice Templates</h2>
                        <p className={styles.description}>
                            Download professional invoice templates in your preferred format.
                        </p>
                    </div>
                    <Link href="/templates" className={styles.viewAll}>
                        View all templates <ArrowRight size={16} />
                    </Link>
                </div>
                <div className={styles.grid}>
                    {formats.map((format) => (
                        <Link key={format.slug} href={`/templates/invoice/${format.slug}`} className={styles.card}>
                            <h3 className={styles.cardTitle}>{format.name} Templates</h3>
                            <p className={styles.cardDesc}>{format.description}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Industries Section */}
            <section className={styles.section}>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Tailored for your Trade</h2>
                        <p className={styles.description}>
                            Invoice templates and guides specifically designed for your industry.
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
                            <p className={styles.cardDesc}>Professional invoice templates for {ind.name.toLowerCase()} services.</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
