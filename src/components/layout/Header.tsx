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
              <Link href="/invoice-generator" className={styles.navItem}>
                Invoice Generator
              </Link>
            </li>
            <li>
              <Link href="/industries" className={styles.navItem}>
                Industries
              </Link>
            </li>
            <li>
              <Link href="/templates" className={styles.navItem}>
                Templates
              </Link>
            </li>
            <li>
              <Link href="/resources" className={styles.navItem}>
                Resources
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
            className={styles.downloadBtn}
          >
            Download App
          </a>
        </div>
      </div>
    </header>
  );
}
