import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/data';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Invoicing Tips & Small Business Guides | DueBy Blog',
    description: 'Learn how to invoice professionally, manage cash flow, and grow your small business with our expert guides and tips.',
};

export default function BlogHub() {
    const posts = getAllBlogPosts();

    return (
        <div className="container">
            <header className={styles.header}>
                <h1 className={styles.title}>Invoicing tips, guides, and business hacks.</h1>
                <p className={styles.subtitle}>Helping solo pros and small teams get paid faster and stay organized.</p>
            </header>

            <div className={styles.postsGrid}>
                {posts.map((post) => (
                    <article key={post.slug} className={styles.postCard}>
                        <h2 className={styles.postTitle}>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className={styles.postSummary}>{post.summary}</p>
                        <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                            Read more →
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
