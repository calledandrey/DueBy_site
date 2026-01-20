const fs = require('fs');
const path = require('path');

// Load data
const industries = require('../next-app-source/data/industries.json');
const templates = require('../next-app-source/data/templates.json');
const features = require('../next-app-source/data/features.json');
const blogPosts = require('../next-app-source/data/blog.json');

const siteTitle = 'DueBy - Free Invoice Generator';
const appStoreLink = 'https://apps.apple.com/us/app/invoice-generator/id6742449153';
const supportEmail = 'invoiceappnet@gmail.com';

// HTML Templates
const header = `
<header class="site-header" id="main-header">
    <div class="container header-inner">
        <a href="index.html" class="logo">
            <img src="assets/img/app-icon.png" alt="DueBy Logo" class="logo-icon">
            DueBy
        </a>
        <div class="header-actions">
            <a href="${appStoreLink}" target="_blank" rel="noopener noreferrer">
                <img src="assets/img/app-store-badge.svg" alt="Download on the App Store" class="store-badge-header">
            </a>
        </div>
    </div>
</header>
`;

const footer = `
<footer class="site-footer">
    <div class="container footer-bottom">
        <p>&copy; ${new Date().getFullYear()} DueBy. All rights reserved.</p>
        <div class="footer-legal">
            <a href="support.html">Support</a>
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Use</a>
        </div>
    </div>
</footer>
`;

function wrap(content, title = siteTitle, description = 'Create professional invoices in seconds.') {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="icon" href="assets/img/favicon.ico">
</head>
<body>
    ${header}
    <main>
        ${content}
    </main>
    ${footer}
    <script src="assets/js/main.js"></script>
</body>
</html>`;
}

// Generate Home
const homeContent = `
<section class="hero container">
    <h1 class="hero-title">Create and send invoices in minutes</h1>
    <p class="hero-subtitle">Build a clean invoice, add your branding, share it with a client, and keep track of what's due—without messy spreadsheets.</p>
    <div class="hero-cta">
        <a href="${appStoreLink}" target="_blank" rel="noopener noreferrer">
            <img src="assets/img/app-store-badge.svg" alt="Download on the App Store" class="store-badge-hero">
        </a>
    </div>
</section>

<section class="section bg-muted">
    <div class="container">
        <h2 class="sectionTitle">Everything you need to get paid</h2>
        <p class="sectionSubtitle">Powerful features designed to simplify your workflow.</p>
        <div class="features-grid">
            <div class="feature-card">
                <h3>Simple Setup</h3>
                <p>Add your business and client details once. We'll handle the rest for every future invoice.</p>
            </div>
            <div class="feature-card">
                <h3>PDF Export</h3>
                <p>Send high-quality, professional PDFs directly to your clients from your device.</p>
            </div>
            <div class="feature-card">
                <h3>Track Payments</h3>
                <p>Stay on top of your finances. See what's paid and what's overdue at a glance.</p>
            </div>
            <div class="feature-card">
                <h3>Financial Reports</h3>
                <p>Generate financial reports with breakdowns by month, quarter, or year to track revenue and business performance.</p>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <h2 class="sectionTitle">Invoice design templates</h2>
        <p class="sectionSubtitle">Pick a clean layout in your preferred format—PDF, Word, Excel, and more.</p>
        <div class="grid">
            <a href="templates-pdf.html" class="card">
                <h2 class="cardName">PDF Templates</h2>
                <p class="cardDesc">Best for final sending.</p>
            </a>
            <a href="templates-word.html" class="card">
                <h2 class="cardName">Word Templates</h2>
                <p class="cardDesc">Best for custom layouts.</p>
            </a>
            <a href="templates-excel.html" class="card">
                <h2 class="cardName">Excel Templates</h2>
                <p class="cardDesc">Best for calculations.</p>
            </a>
            <a href="templates-google-docs.html" class="card">
                <h2 class="cardName">Google Docs Templates</h2>
                <p class="cardDesc">Best for quick edits + sharing.</p>
            </a>
        </div>
    </div>
</section>

`;
fs.writeFileSync('index.html', wrap(homeContent));

// Generate Support
const supportContent = `
<div class="container narrow-container page-header">
    <h1 class="title">We're here to help</h1>
    <p class="subtitle">Questions or feedback? Reach out to our team.</p>
    <div class="content">
        <p>If you have any questions about the app, issues with an invoice, or feature suggestions, we'd love to hear from you.</p>
        <h2>Email Us</h2>
        <p>Support is available every day via email. We usually respond within 24 hours.</p>
        <p><a href="mailto:${supportEmail}" class="link">${supportEmail}</a></p>
    </div>
</div>
`;
fs.writeFileSync('support.html', wrap(supportContent, 'Support | DueBy'));

// Generate Privacy & Terms
const privacyContent = `
<div class="container narrow-container page-header">
    <h1 class="title">Privacy Policy</h1>
    <p class="subtitle">Last updated: March 13, 2025</p>
    <div class="content">
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
        <p>To exercise these rights, please contact us at <a href="mailto:${supportEmail}" class="link">${supportEmail}</a>.</p>

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
            Email: <a href="mailto:${supportEmail}" class="link">${supportEmail}</a>
        </p>
    </div>
</div>
`;

const termsContent = `
<div class="container narrow-container page-header">
    <h1 class="title">Terms of Service</h1>
    <p class="subtitle">Effective Date: March 13, 2025</p>
    <div class="content">
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
            Your privacy is critical to us. By using the app, you agree to the terms outlined in our <a href="privacy.html" class="link">Privacy Policy</a>.
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
            For questions or support, please contact us at <a href="mailto:${supportEmail}" class="link">${supportEmail}</a>.
        </p>
    </div>
</div>
`;

fs.writeFileSync('index.html', wrap(homeContent));
fs.writeFileSync('support.html', wrap(supportContent, 'Support | DueBy'));
fs.writeFileSync('privacy.html', wrap(privacyContent, 'Privacy Policy | DueBy'));
fs.writeFileSync('terms.html', wrap(termsContent, 'Terms of Service | DueBy'));

console.log('Static site generated successfully!');
