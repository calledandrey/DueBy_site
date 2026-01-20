import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'About DueBy — Simple Invoicing for Solo Pros',
    description: 'Learn about DueBy, the invoice generator built for contractors, freelancers, and small business owners who want professional invoices without the fuss.',
};

export default function AboutPage() {
    return (
        <div className="container">
            <header className={styles.header}>
                <h1 className={styles.title}>Invoices that get you paid—minus the complexity</h1>
                <p className={styles.subtitle}>Built for solo pros and small teams who need to send legitimate-looking invoices without a learning curve.</p>
            </header>

            <section className={styles.section}>
                <h2>The DueBy Story</h2>
                <p>We built DueBy because we were tired of oversized, expensive accounting software that felt like a chore to use. Most small business owners just need a way to send a professional invoice, track what's due, and get back to work.</p>
            </section>

            <section className={styles.section}>
                <h2>Our Mission</h2>
                <p>To provide professionals in the trades and creative industries with the simplest, most reliable invoicing tools. Whether you’re on a roof, in a studio, or at a desk, DueBy works where you do.</p>
            </section>
        </div>
    );
}
