import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>
                Professional Invoices made easy for Pros.
            </h1>
            <p className={styles.subtitle}>
                Create, send, and track invoices in seconds. The #1 invoice app for contractors and freelancers. No account required to start.
            </p>
            <div className={styles.ctaGroup}>
                <a
                    href="https://apps.apple.com/us/app/invoice-generator/id6742449153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryCta}
                >
                    <Image
                        src="/app-store-badge.svg"
                        alt="Download on the App Store"
                        width={150}
                        height={52}
                        className={styles.storeBadge}
                    />
                </a>
            </div>
        </section>
    );
}
