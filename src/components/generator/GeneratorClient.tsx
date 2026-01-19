'use client';

import { useState } from 'react';
import styles from '../../app/invoice-generator/page.module.css';

export interface InvoiceData {
    invoiceNumber: string;
    from: string;
    to: string;
    date: string;
    dueDate: string;
    items: Array<{ description: string; quantity: number; rate: number }>;
    notes: string;
}

const initialData: InvoiceData = {
    invoiceNumber: 'INV-001',
    from: '',
    to: '',
    date: new Date().toISOString().split('T')[0],
    dueDate: '',
    items: [{ description: 'Service', quantity: 1, rate: 0 }],
    notes: '',
};

export function GeneratorClient() {
    const [data, setData] = useState<InvoiceData>(initialData);

    return (
        <div className={styles.editor}>
            <div className={styles.formContainer}>
                <div className={styles.placeholder}>
                    {/* Replace with <InvoiceForm data={data} onChange={setData} /> */}
                    <p style={{ textAlign: 'center' }}>Form Editor (Coming Soon)</p>
                    <pre style={{ fontSize: '0.75rem', marginTop: '1rem' }}>{JSON.stringify(data, null, 2)}</pre>
                </div>
            </div>
            <div className={styles.previewContainer}>
                {/* Replace with <InvoicePreview data={data} /> */}
                <div className={styles.placeholder}>Preview</div>
            </div>
        </div>
    );
}
