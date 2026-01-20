import Link from 'next/link';
import { ArrowRight, FileText, FileType2, Sheet, File } from 'lucide-react';
import styles from './TemplatePreviews.module.css';

export function TemplatePreviews() {
    const templates = [
        { name: 'PDF', href: '/invoice-templates/pdf', description: 'Best for final sending', Icon: FileText },
        { name: 'Word', href: '/invoice-templates/word', description: 'Best for custom layouts', Icon: FileType2 },
        { name: 'Excel', href: '/invoice-templates/excel', description: 'Best for calculations', Icon: Sheet },
        { name: 'Google Docs', href: '/invoice-templates/google-docs', description: 'Best for quick edits + sharing', Icon: File },
    ];

    return (
        <div className="container">
            <section className={styles.section}>
                <div className={styles.header}>
                    <div>
                        <h2 className={styles.title}>Invoice design templates</h2>
                        <p className={styles.description}>
                            Pick a clean invoice layout, customize it in minutes, and send it with confidence.
                        </p>
                    </div>
                    <Link href="/invoice-templates" className={styles.viewAll}>
                        View all templates <ArrowRight size={16} />
                    </Link>
                </div>

                <div className={styles.grid}>
                    {templates.map(({ name, href, description, Icon }) => (
                        <Link key={href} href={href} className={styles.card}>
                            <div className={styles.icon}>
                                <Icon size={20} />
                            </div>
                            <h3 className={styles.cardTitle}>{name} templates</h3>
                            <p className={styles.cardDesc}>{description}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

