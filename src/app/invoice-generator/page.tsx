import { Metadata } from 'next';
import { GeneratorClient } from '@/components/generator/GeneratorClient';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Invoice Generator — Create Invoices Online | DueBy',
    description: 'Create professional invoices online. Add your logo, client details, line items, taxes, discounts, and export as PDF. Fast, simple, reliable.',
};

export default function InvoiceGeneratorPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.h1}>Free invoice generator for fast, professional invoices.</h1>
                <p className={styles.subhead}>Generate an invoice that looks legit, is easy to read, and is ready to send—without formatting headaches.</p>
                <div className={styles.headerActions}>
                    <Link href="/invoice-templates" className={styles.secondaryCta}>
                        Download template
                    </Link>
                </div>
            </header>

            <GeneratorClient />

            <section className={styles.benefitsSection}>
                <h2 className={styles.h2}>What you can do with DueBy</h2>
                <ul className={styles.benefitsList}>
                    <li>Add client + billing/shipping details</li>
                    <li>Items/services with qty, rate, subtotal</li>
                    <li>Taxes (VAT/sales tax), discounts, deposits</li>
                    <li>Notes, terms, due dates, invoice numbering</li>
                    <li>Export PDF, share, and keep a record</li>
                </ul>
            </section>

            <section className={styles.useCasesSection}>
                <h2 className={styles.h2}>Popular use cases</h2>
                <div className={styles.useCasesGrid}>
                    <Link href="/industries/contractor" className={styles.useCaseLink}>Contractors & trades invoices →</Link>
                    <Link href="/industries/freelancer" className={styles.useCaseLink}>Freelancer invoices →</Link>
                    <Link href="/industries/cleaning" className={styles.useCaseLink}>Cleaning service invoices →</Link>
                </div>
            </section>

            <section className={styles.faqSection}>
                <h2 className={styles.h2}>Invoice generator FAQ</h2>
                <div className={styles.faqGrid}>
                    <div className={styles.faqItem}>
                        <h3 className={styles.h3}>Can I create an invoice from my phone?</h3>
                        <p>Yes—DueBy is designed for mobile-first invoicing.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3 className={styles.h3}>Does it support taxes like VAT?</h3>
                        <p>Yes—add tax lines and show tax totals clearly.</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3 className={styles.h3}>Can I export invoices as PDF?</h3>
                        <p>Yes—PDF export is supported.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
