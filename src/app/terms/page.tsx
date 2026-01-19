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
                <p>Effective Date: March 13, 2025</p>

                <h2>1. Introduction</h2>
                <p>
                    By accessing or using the DueBy website, the DueBy service, or any applications (including mobile applications) made available by our team (collectively, the "Service"), you agree to comply with these Terms of Use and End User License Agreement ("Agreement").
                    If you do not agree to this Agreement, you must not access or use the Service.
                </p>
                <p>
                    This Agreement, together with any related documents and policies, constitutes a legally binding agreement.
                    Please read it carefully before downloading, installing, or using the app.
                    If you do not agree to this Agreement, you must immediately discontinue using the app and delete it from your device.
                </p>

                <h2>2. Changes to this Agreement</h2>
                <p>
                    We reserve the right to modify or update this Agreement at any time.
                    Users will be informed of updates via changes posted in the app or on our website.
                    Continued use of the app constitutes acceptance of the updated terms.
                </p>

                <h2>3. Restrictions on Who Can Use the App</h2>
                <ul>
                    <li>You must be at least 18 years old to use the app, or between 13 and 17 years old with explicit parental or guardian consent.</li>
                    <li>Users under 13 years of age are strictly prohibited from accessing or using the app.</li>
                    <li>Parents or guardians are responsible for supervising minors and ensuring compliance with this Agreement.</li>
                </ul>

                <h2>4. General Terms</h2>
                <p>
                    The app is a utility program designed for personal, non-commercial use, enabling document scanning, editing, sharing, and cloud storage.
                    Other features include file management tools. Details of features are available on the app's product page.
                </p>

                <h2>5. Privacy Policy</h2>
                <p>
                    Your privacy is critical to us. By using the app, you agree to the terms outlined in our <a href="/privacy">Privacy Policy</a>.
                    If you do not accept the Privacy Policy, you must stop using the app.
                </p>

                <h2>6. User Content, Feedback, and Intellectual Property</h2>
                <h3>User Content:</h3>
                <ul>
                    <li>You retain ownership of content uploaded or created via the app. However, we may process your content to provide app features, such as cloud storage and AI analysis.</li>
                    <li>By using AI features, you grant us a limited license to process your content in accordance with this Agreement.</li>
                </ul>
                <h3>Feedback:</h3>
                <ul>
                    <li>Any feedback provided by you may be used to improve our services. We retain a perpetual, royalty-free license to use such feedback.</li>
                </ul>
                <h3>Intellectual Property:</h3>
                <ul>
                    <li>The app's source code, design, and trademarks are the exclusive property of DueBy and are protected by applicable laws.</li>
                </ul>

                <h2>7. Prohibited Behavior</h2>
                <ul>
                    <li>Use the app for illegal, harmful, or unauthorized purposes.</li>
                    <li>Post defamatory, obscene, or infringing content.</li>
                    <li>Reverse-engineer, modify, or distribute the app.</li>
                    <li>Misuse trademarks or proprietary content.</li>
                </ul>

                <h2>8. Subscriptions and Charges</h2>
                <ul>
                    <li>Subscriptions auto-renew unless canceled at least 24 hours before the billing cycle ends.</li>
                    <li>Free trials transition to paid subscriptions unless canceled in advance.</li>
                    <li>Refunds are subject to the policies of the Apple App Store or Google Play Store.</li>
                </ul>

                <h2>9. Third-Party Websites and Resources</h2>
                <p>
                    The app may link to third-party resources. We are not responsible for their content or availability. Use these at your own risk.
                </p>

                <h2>10. Disclaimer of Warranties</h2>
                <p>
                    The app is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service or error-free operation.
                </p>

                <h2>11. Limitation of Liability</h2>
                <p>
                    We are not liable for direct or indirect damages arising from your use of the app, including loss of data, profits, or unauthorized access to your account.
                </p>

                <h2>12. Governing Law and Legal Compliance</h2>
                <p>
                    This Agreement shall be governed by and construed in accordance with the laws of your jurisdiction.
                    Any disputes arising under or in connection with this Agreement shall be subject to the non-exclusive jurisdiction of the courts in your jurisdiction.
                </p>

                <h2>13. Termination and Severability</h2>
                <p>
                    We reserve the right to terminate this Agreement at any time for any reason. If any provision is deemed unenforceable, the remaining terms remain in effect.
                </p>

                <h2>14. Contact Information</h2>
                <p>
                    For questions or support, please contact us at <a href="mailto:support@dueby.com">support@dueby.com</a>.
                </p>
            </div>
        </div>
    );
}
