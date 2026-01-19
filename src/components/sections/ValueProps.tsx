import { Zap, ShieldCheck, PieChart } from 'lucide-react';
import styles from './ValueProps.module.css';

export function ValueProps() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <Zap size={24} />
                        </div>
                        <h3 className={styles.title}>Lighting Fast</h3>
                        <p className={styles.description}>
                            Generated professional invoices in under minute. Save clients, items, and taxes for frequent use.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className={styles.title}>Professional & Secure</h3>
                        <p className={styles.description}>
                            Look professional with custom templates. Your data is stored securely on your device and synced via iCloud.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>
                            <PieChart size={24} />
                        </div>
                        <h3 className={styles.title}>Business Insights</h3>
                        <p className={styles.description}>
                            Track payments, overdue invoices, and monthly revenue with built-in reports and charts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
