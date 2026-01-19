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
                <p>Effective Date: March 13, 2025</p>

                <h2>1. Introduction</h2>
                <p>
                    DueBy ("we," "us," or "our") operates the DueBy mobile application (the "Service").
                    We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
                    By using the Service, you agree to the collection and use of information in accordance with this policy.
                </p>

                <h2>2. Information Collection and Use</h2>
                <p>We collect several types of information for various purposes to provide and improve our Service to you.</p>

                <h3>2.1 Personal Data</h3>
                <p>
                    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").
                    This may include, but is not limited to:
                </p>
                <ul>
                    <li>Email address</li>
                    <li>Cookies and Usage Data</li>
                </ul>

                <h3>2.2 Usage Data</h3>
                <p>
                    When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to:
                </p>
                <ul>
                    <li>The type of mobile device you use</li>
                    <li>Your mobile device unique ID</li>
                    <li>The IP address of your mobile device</li>
                    <li>Your mobile operating system</li>
                    <li>The type of mobile Internet browser you use</li>
                    <li>Unique device identifiers and other diagnostic data</li>
                </ul>

                <h3>2.3 Tracking & Cookies Data</h3>
                <p>
                    We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
                    Cookies are files with a small amount of data which may include an anonymous unique identifier.
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    However, if you do not accept cookies, you may not be able to use some portions of our Service.
                </p>

                <h2>3. Use of Data</h2>
                <p>DueBy uses the collected data for various purposes:</p>
                <ul>
                    <li>To provide and maintain the Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                    <li>To monitor the usage of the Service</li>
                    <li>To detect, prevent, and address technical issues</li>
                </ul>

                <h2>4. Legal Basis for Processing Personal Data</h2>
                <p>
                    If you are from the European Economic Area (EEA), DueBy's legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it.
                    We may process your Personal Data because:
                </p>
                <ul>
                    <li>We need to perform a contract with you</li>
                    <li>You have given us permission to do so</li>
                    <li>The processing is in our legitimate interests and it's not overridden by your rights</li>
                    <li>To comply with the law</li>
                </ul>

                <h2>5. Retention of Data</h2>
                <p>
                    DueBy will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
                    We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
                </p>

                <h2>6. Transfer of Data</h2>
                <p>
                    Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                    Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                </p>

                <h2>7. Disclosure of Data</h2>
                <p>We may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul>
                    <li>To comply with a legal obligation</li>
                    <li>To protect and defend the rights or property of DueBy</li>
                    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>To protect the personal safety of users of the Service or the public</li>
                    <li>To protect against legal liability</li>
                </ul>

                <h2>8. Security of Data</h2>
                <p>
                    The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
                    While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>

                <h2>9. Your Data Protection Rights (GDPR)</h2>
                <p>
                    If you are a resident of the European Economic Area (EEA), you have certain data protection rights.
                    DueBy aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
                    You have the following rights:
                </p>
                <ul>
                    <li>The right to access, update, or delete the information we have on you</li>
                    <li>The right to rectification</li>
                    <li>The right to object</li>
                    <li>The right of restriction</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                </ul>
                <p>To exercise these rights, please contact us at <a href="mailto:support@dueby.com">support@dueby.com</a>.</p>

                <h2>10. Links to Other Websites</h2>
                <p>
                    Our Service may contain links to other websites that are not operated by us.
                    If you click on a third-party link, you will be directed to that third party's site.
                    We strongly advise you to review the Privacy Policy of every site you visit.
                    We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>

                <h2>11. Children's Privacy</h2>
                <p>
                    Our Service does not address anyone under the age of 13.
                    We do not knowingly collect personally identifiable information from children under 13.
                    If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.
                    If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                </p>

                <h2>12. Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    We will let you know via email and/or a prominent notice on our Service prior to the change becoming effective and update the "Effective Date" at the top of this Privacy Policy.
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>

                <h2>13. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us:
                    <br />
                    Email: <a href="mailto:support@dueby.com">support@dueby.com</a>
                </p>
            </div>
        </div>
    );
}
