const fs = require('fs');
const path = require('path');

// Load data
const industries = require('../next-app-source/data/industries.json');
const templates = require('../next-app-source/data/templates.json');
const features = require('../next-app-source/data/features.json');
const blogPosts = require('../next-app-source/data/blog.json');

const siteTitle = 'DueBy - Free Invoice Generator';
const appStoreLink = 'https://apps.apple.com/us/app/invoice-generator/id6742449153';

// HTML Templates
const header = `
<header class="site-header" id="main-header">
    <div class="container header-inner">
        <a href="index.html" class="logo">
            <img src="assets/img/app-icon.png" alt="DueBy Logo" class="logo-icon">
            DueBy
        </a>
        <nav class="nav">
            <ul class="nav-links">
            </ul>
        </nav>
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
        <div class="features-grid">
            <div class="feature-card">
                <h3>Simple Setup</h3>
                <p>Add your business and client details once. We'll handle the rest.</p>
            </div>
            <div class="feature-card">
                <h3>PDF Export</h3>
                <p>Send professional PDFs directly to your clients from your device.</p>
            </div>
            <div class="feature-card">
                <h3>Track Payments</h3>
                <p>See what's paid and what's overdue at a glance.</p>
            </div>
        </div>
    </div>
</section>

<section class="section container">
    <h2 class="sectionTitle">How it works</h2>
    <div class="steps-grid">
        <div class="step-item">
            <span class="step-number">1</span>
            <h3>Add Details</h3>
            <p>Enter items, taxes, and discounts.</p>
        </div>
        <div class="step-item">
            <span class="step-number">2</span>
            <h3>Choose Style</h3>
            <p>Pick a template that matches your brand.</p>
        </div>
        <div class="step-item">
            <span class="step-number">3</span>
            <h3>Send & Get Paid</h3>
            <p>Export and share via email or text.</p>
        </div>
    </div>
</section>
`;
fs.writeFileSync('index.html', wrap(homeContent));

// Generate Industries Hub
const industriesContent = `
<div class="container page-header">
    <h1 class="title">Invoicing by industry—examples and tips</h1>
    <p class="subtitle">Professional invoicing guides designed for your specific trade. Built to match real-world workflows.</p>
    <div class="grid">
        ${industries.map(ind => `
            <a href="industry-${ind.slug}.html" class="card">
                <h2 class="cardName">${ind.name}</h2>
                <p class="cardDesc">${ind.description}</p>
            </a>
        `).join('')}
    </div>
</div>
`;
fs.writeFileSync('industries.html', wrap(industriesContent, 'Invoicing by Industry | DueBy'));

// Generate Industry Pages
industries.forEach(ind => {
    const content = `
    <div class="container content-page">
        <h1 class="title">${ind.name} Invoice Templates & Tips</h1>
        <div class="content">
            <p>${ind.description}</p>
            <p>DueBy helps ${ind.name.toLowerCase()}s create professional invoices in seconds.</p>
            <h2>Common items for ${ind.name}s:</h2>
            <ul>
                ${ind.name === 'Contractor' ? '<li>Labor (hourly or flat rate)</li><li>Materials & supplies</li><li>Consultation fees</li>' : '<li>Professional service</li><li>Project fee</li>'}
            </ul>
        </div>
    </div>
    `;
    fs.writeFileSync(`industry-${ind.slug}.html`, wrap(content, `${ind.name} Invoices | DueBy`));
});

// Generate Support
const supportContent = `
<div class="container narrow-container page-header">
    <h1 class="title">We're here to help</h1>
    <div class="content">
        <p>Questions about an invoice? Need help with the app? We're here for you.</p>
        <h2>Email Us</h2>
        <p>Support is available via email at <a href="mailto:invoiceappnet@gmail.com" class="link">invoiceappnet@gmail.com</a></p>
    </div>
</div>
`;
fs.writeFileSync('support.html', wrap(supportContent, 'Support | DueBy'));

// Generate Invoice Templates Hub
const templatesContent = `
<div class="container page-header">
    <h1 class="title">Free invoice templates</h1>
    <p class="subtitle">Download professional templates in various formats.</p>
    <div class="grid">
        ${templates.map(fmt => `
            <a href="templates-${fmt.slug}.html" class="card">
                <h2 class="cardName">${fmt.name}</h2>
                <p class="cardDesc">Professional ${fmt.name} templates for your business.</p>
            </a>
        `).join('')}
    </div>
</div>
`;
fs.writeFileSync('invoice-templates.html', wrap(templatesContent, 'Free Invoice Templates | DueBy'));

// Generate Format Specific Templates
templates.forEach(fmt => {
    const content = `
    <div class="container page-header">
        <h1 class="title">${fmt.name} Invoice Templates</h1>
        <p class="subtitle">Best for ${fmt.slug === 'pdf' ? 'final sending' : 'calculations and custom edits'}.</p>
        <div class="content">
            <p>Download our free ${fmt.name} templates and customize them in minutes.</p>
            <a href="${appStoreLink}" class="link">Or use DueBy app for faster invoicing on mobile →</a>
        </div>
    </div>
    `;
    fs.writeFileSync(`templates-${fmt.slug}.html`, wrap(content, `${fmt.name} Templates | DueBy`));
});

// Generate Invoice Generator Page
const generatorContent = `
<div class="container page-header">
    <h1 class="title">Invoice Generator App</h1>
    <p class="subtitle">Generate professional invoices on your iPhone or iPad.</p>
    <div class="hero-cta">
        <a href="${appStoreLink}" target="_blank" rel="noopener noreferrer">
            <img src="assets/img/app-store-badge.svg" alt="Download on the App Store" class="store-badge-hero">
        </a>
    </div>
</div>
`;
fs.writeFileSync('invoice-generator.html', wrap(generatorContent, 'Free Invoice Generator | DueBy'));

// Generate Privacy & Terms
fs.writeFileSync('privacy.html', wrap('<div class="container content-page"><h1>Privacy Policy</h1><p>Your privacy is important to us...</p></div>', 'Privacy Policy | DueBy'));
fs.writeFileSync('terms.html', wrap('<div class="container content-page"><h1>Terms of Use</h1><p>By using DueBy, you agree to these terms...</p></div>', 'Terms of Use | DueBy'));

console.log('Static site generated successfully!');
