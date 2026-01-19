import { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
    title: 'Privacy Policy | DueBy',
    description: 'Privacy Policy for DueBy Invoice Generator app and website.',
};

export default function PrivacyPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <div className={styles.content}>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>
                    At DueBy ("we", "us", or "our"), we respect your privacy and are committed to protecting it.
                    This Privacy Policy explains how we handle your information when you use our DueBy mobile application and website.
                </p>

                <h2>1. Information We Collect</h2>
                <p>
                    We prioritize your privacy by keeping data on your device.
                    The DueBy app is designed to store your invoices, client details, and business Information locally on your device.
                </p>

                <h2>2. Data Syncing</h2>
                <p>
                    If you enable iCloud sync, your data will be stored in your private iCloud container, which is encrypted and accessible only by you.
                    We do not have access to your iCloud data.
                </p>

                <h2>3. Third-Party Services</h2>
                <p>
                    We may use anonymous analytics tools to help us understand how the app is used and improve its performance.
                    No personally identifiable information (PII) is collected for this purpose.
                </p>

                <h2>4. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at support@dueby.com.
                </p>
            </div>
        </div>
    );
}
