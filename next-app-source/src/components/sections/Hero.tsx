import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>
                Create and send invoices in minutes
            </h1>
            <p className={styles.subtitle}>
                Build a clean invoice, add your branding, share it with a client, and keep track of what's due—without messy spreadsheets.
            </p>
            <div id="hero-cta" className={styles.appStoreCta}>
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
