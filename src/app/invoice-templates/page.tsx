import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, FileType2, Sheet, File, Table, ArrowRight } from 'lucide-react';
import { getAllIndustries, getAllTemplateFormats } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Free Invoice Templates (PDF, Word, Excel) | DueBy',
    description: 'Download free invoice templates in PDF, Word, Excel, and Google Docs. Simple layouts for freelancers, contractors, and small businesses.',
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
                <h1 className={styles.title}>Free invoice templates you can customize in minutes.</h1>
                <p className={styles.subtitle}>
                    Pick a format, customize, send. Or generate invoices faster inside DueBy.
                </p>
                <div className={styles.headerActions}>
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

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Invoice format templates</h2>
                <div className={styles.formatsGrid}>
                    {[
                        { name: 'PDF', slug: 'pdf', description: 'best for final sending', icon: 'FileText' },
                        { name: 'Word', slug: 'word', description: 'best for custom layouts', icon: 'FileType2' },
                        { name: 'Excel', slug: 'excel', description: 'best for calculations', icon: 'Sheet' },
                        { name: 'Google Docs', slug: 'google-docs', description: 'best for quick edits + sharing', icon: 'File' }
                    ].map((format) => {
                        const Icon = iconMap[format.icon] || FileText;
                        return (
                            <Link key={format.slug} href={`/invoice-templates/${format.slug}`} className={styles.formatCard}>
                                <div className={styles.formatIcon}>
                                    <Icon size={24} />
                                </div>
                                <div className={styles.formatInfo}>
                                    <span className={styles.formatName}>{format.name} Templates</span>
                                    <p className={styles.formatDesc}>{format.description}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Templates by profession</h2>
                <p className={styles.sectionDesc}>Find invoice templates and invoicing tips for your specific industry.</p>
                <div className={styles.industryGrid}>
                    {industries.slice(0, 12).map((ind) => (
                        <Link key={ind.slug} href={`/industries/${ind.slug}`} className={styles.industryLink}>
                            {ind.name} Templates
                            <ArrowRight size={14} />
                        </Link>
                    ))}
                </div>
                <div className={styles.viewMore}>
                    <Link href="/industries" className={styles.secondaryBtn}>
                        View all industry hub <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Choose the right format</h2>
                <div className={styles.guideGrid}>
                    <div className={styles.guideItem}>
                        <h3>PDF</h3>
                        <p>Best for final sending: ensures your formatting stays locked and looks professional on any device.</p>
                    </div>
                    <div className={styles.guideItem}>
                        <h3>Word</h3>
                        <p>Best for custom layouts: fully customizable fonts, branding, and design elements.</p>
                    </div>
                    <div className={styles.guideItem}>
                        <h3>Excel</h3>
                        <p>Best for calculations: automatic subtotals and totals for itemized work.</p>
                    </div>
                    <div className={styles.guideItem}>
                        <h3>Google Docs</h3>
                        <p>Best for quick edits + sharing: easy online access and collaboration.</p>
                    </div>
                </div>
            </div>

            <section className={styles.faqSection}>
                <h2 className={styles.sectionTitle}>FAQ</h2>
                <div className={styles.faqGrid}>
                    <div className={styles.faqItem}>
                        <h3>Are these templates really free?</h3>
                        <p>Yes—download and use them as many times as you need.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Which template is best for contractors?</h3>
                        <p>Start with PDF for sending; use Excel if you need itemized calculations and automatic totals.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3>Can I add my logo?</h3>
                        <p>Yes—each format supports branding with simple edits to the template header.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
