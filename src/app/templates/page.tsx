import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, FileType2, Sheet, File, Table, ArrowRight } from 'lucide-react';
import { getAllIndustries, getAllTemplateFormats } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Free Invoice Templates | PDF, Word, Excel, Google Docs',
    description: 'Download free professional invoice templates in PDF, Word, Excel, and more. Tailored for freelancers and small businesses.',
};

const iconMap: Record<string, any> = {
    'FileText': FileText,
    'FileType2': FileType2,
    'Sheet': Sheet,
    'File': File,
    'Table': Table,
};

export default function TemplatesPage() {
    const formats = getAllTemplateFormats();
    const industries = getAllIndustries();

    return (
        <div className="container">
            <header className={styles.header}>
                <h1 className={styles.title}>Free Invoice Templates</h1>
                <p className={styles.subtitle}>
                    Choose your preferred file format or industry to download professional invoice templates.
                </p>
            </header>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Browse by Format</h2>
                <div className={styles.formatsGrid}>
                    {formats.map((format) => {
                        const Icon = iconMap[format.icon] || FileText;
                        return (
                            <Link key={format.slug} href={`/templates/invoice/${format.slug}`} className={styles.formatCard}>
                                <div className={styles.formatIcon}>
                                    <Icon size={24} />
                                </div>
                                <span className={styles.formatName}>{format.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Browse by Industry</h2>
                <div className={styles.industryGrid}>
                    {industries.map((ind) => (
                        <Link key={ind.slug} href={`/templates/invoice/${ind.slug}`} className={styles.industryLink}>
                            {ind.name} Templates
                            <ArrowRight size={14} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
