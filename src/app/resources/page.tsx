import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/posts';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Resources & Guides | DueBy',
    description: 'Helpful guides, articles, and tips about invoicing, freelancers, and small business management.',
};

export default function ResourcesPage() {
    const posts = getAllPosts();

    return (
        <div className="container">
            <header className={styles.header}>
                <h1 className={styles.title}>Resources & Guides</h1>
                <p className={styles.subtitle}>
                    Expert advice on invoicing, payments, and running your business tailored for freelancers and contractors.
                </p>
            </header>

            {posts.length > 0 ? (
                <div className={styles.grid}>
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/resources/guides/${post.slug}`} className={styles.card}>
                            <div className={styles.cardContent}>
                                <span className={styles.date}>{post.date}</span>
                                <h2 className={styles.cardTitle}>{post.title}</h2>
                                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                <div className={styles.readMore}>
                                    Read article <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--muted-foreground)' }}>
                    <p>No guides available yet. Check back soon!</p>
                </div>
            )}
        </div>
    );
}
