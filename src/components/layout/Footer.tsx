import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3>Product</h3>
                        <ul>

                            <li><Link href="/invoice-templates">Templates</Link></li>
                            <li><Link href="/industries">Industries</Link></li>
                            <li><Link href="/features/estimates">Features</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Resources</h3>
                        <ul>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Company</h3>
                        <ul>
                            <li><Link href="/contact">Contact Support</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Social</h3>
                        <ul>
                            {/* Add social links here if any */}
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} DueBy. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
