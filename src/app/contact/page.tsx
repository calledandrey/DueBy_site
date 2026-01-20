import { Metadata } from 'next';
import styles from '../page.shared.module.css';

export const metadata: Metadata = {
    title: 'Help & Support | DueBy',
    description: 'Get help with DueBy. Find support email, FAQ, and resources to help you invoice confidently.',
};

export default function ContactPage() {
    return (
        <div className={styles.containerNarrow}>
            <h1 className={styles.title}>We're here to help</h1>
            <div className={styles.content}>
                <p>
                    Questions about an invoice? Need help with the app? We're here for you.
                </p>

                <h2>Email Us</h2>
                <p>
                    The best way to contact us is via email: <br />
                    <a href="mailto:support@dueby.com" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
                        support@dueby.com
                    </a>
                </p>

                <h2>Frequently Asked Questions</h2>
                <ul>
                    <li><strong>How do I sync my data?</strong> Ensure iCloud is enabled for DueBy in your device settings.</li>
                    <li><strong>Can I change the currency?</strong> Yes, you can set your preferred currency in the app settings.</li>
                    <li><strong>Is it free?</strong> DueBy offers a free tier with core features. Premium features are available via subscription.</li>
                </ul>
            </div>
        </div>
    );
}
