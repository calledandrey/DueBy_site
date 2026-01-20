'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showHeaderCta, setShowHeaderCta] = useState(false);

  useEffect(() => {
    const isHome = pathname === '/';

    // Always track scroll for background
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // On non-home pages, always show CTA
    if (!isHome) {
      setShowHeaderCta(true);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }

    // On home page, hide CTA initially
    setShowHeaderCta(false);

    let observer: IntersectionObserver | null = null;

    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(() => {
      const heroCta = document.getElementById('hero-cta');

      if (heroCta) {
        observer = new IntersectionObserver(
          ([entry]) => {
            setShowHeaderCta(!entry.isIntersecting);
          },
          { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
        );
        observer.observe(heroCta);
      }
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
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
              <Link href="/contact" className={styles.navItem}>
                Support
              </Link>
            </li>
          </ul>
        </nav>

        <div className={`${styles.actions} ${showHeaderCta ? styles.visible : styles.hidden}`}>
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
