import { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
    title: 'Terms of Service | DueBy',
    description: 'Terms of service for using the DueBy Invoice Generator application.',
};

export default function TermsPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Terms of Service</h1>
            <div className={styles.content}>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Agreement to Terms</h2>
                <p>
                    By downloading, accessing, or using the DueBy mobile application or website, you agree to be bound by these Terms of Service.
                </p>

                <h2>2. Use of the App</h2>
                <p>
                    DueBy allows you to generate and manage invoices. You are responsible for the accuracy of the content you create and send using our tools.
                </p>

                <h2>3. Intellectual Property</h2>
                <p>
                    The DueBy app, including its design, code, and graphics, is the property of DueBy and is protected by copyright laws.
                    The invoices you generate are your property.
                </p>

                <h2>4. Disclaimer</h2>
                <p>
                    The app is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted.
                </p>
            </div>
        </div>
    );
}
