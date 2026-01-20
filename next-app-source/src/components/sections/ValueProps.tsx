import { Zap, ShieldCheck, PieChart, BarChart3 } from 'lucide-react';
import styles from './ValueProps.module.css';

export function ValueProps() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.sectionTitle}>Everything you need to invoice confidently</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <Zap size={24} />
                        </div>
                        <h3 className={styles.title}>Fast sharing</h3>
                        <p className={styles.description}>
                            Send as PDF or share a link clients can open instantly.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className={styles.title}>Your branding</h3>
                        <p className={styles.description}>
                            Add logo, business details, invoice number rules, and payment terms.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <PieChart size={24} />
                        </div>
                        <h3 className={styles.title}>Professional layouts</h3>
                        <p className={styles.description}>
                            Clean designs that look good on any device and print well.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <BarChart3 size={24} />
                        </div>
                        <h3 className={styles.title}>Financial reports</h3>
                        <p className={styles.description}>
                            Generate financial reports with breakdowns by month, quarter, or year to track revenue and business performance.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className={styles.title}>Stay on top of due dates</h3>
                        <p className={styles.description}>
                            See what’s sent, viewed, paid, and overdue.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
