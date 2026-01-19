import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>
                Invoices that get paid—fast.
            </h1>
            <h2 className={styles.headline}>Create and send invoices in minutes.</h2>
            <p className={styles.subtitle}>
                Build a clean invoice, add your branding, share it with a client, and keep track of what’s due—without messy spreadsheets.
            </p>
            <div className={styles.ctaGroup}>
                <Link href="/invoice-generator" className={styles.primaryAction}>
                    Create invoice
                </Link>
                <Link href="/invoice-templates" className={styles.secondaryAction}>
                    Browse free templates
                </Link>
            </div>
            <p className={styles.trustLine}>Works on iPhone, iPad, Mac. No credit card required.</p>
            <div className={styles.appStoreCta}>
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
