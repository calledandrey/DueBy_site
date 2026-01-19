import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/app-icon.png"
            alt="DueBy Logo"
            width={32}
            height={32}
            className={styles.logoIcon}
          />
          DueBy
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navLinks}>

            <li>
              <Link href="/industries" className={styles.navItem}>
                Industries
              </Link>
            </li>
            <li>
              <Link href="/invoice-templates" className={styles.navItem}>
                Templates
              </Link>
            </li>
            <li>
              <Link href="/blog" className={styles.navItem}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navItem}>
                Support
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <a
            href="https://apps.apple.com/us/app/invoice-generator/id6742449153"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={120}
              height={36}
              style={{ height: '36px', width: 'auto' }}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
