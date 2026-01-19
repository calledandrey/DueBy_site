import { Metadata } from 'next';
import { GeneratorClient } from '@/components/generator/GeneratorClient';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Free Online Invoice Generator | DueBy',
    description: 'Create professional invoices in seconds with our free online invoice generator. Download as PDF or send directly to clients.',
};

export default function InvoiceGeneratorPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Free Online Invoice Generator</h1>
                <p>Create, manage, and track your invoices directly from your browser.</p>
            </header>

            <GeneratorClient />
        </div>
    );
}
