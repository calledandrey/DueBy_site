import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/data';
import styles from './post.module.css';

export async function generateStaticParams() {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: post.meta,
        description: post.summary,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container">
            <article className={styles.article}>
                <header className={styles.header}>
                    <p className={styles.category}>Business Guides</p>
                    <h1 className={styles.title}>{post.h1}</h1>
                    <p className={styles.summary}>{post.summary}</p>
                </header>

                <div className={styles.content}>
                    {post.sections.map((section, idx) => (
                        <section key={idx} className={styles.section}>
                            <h2>{section.h2}</h2>
                            <p>{section.content}</p>
                        </section>
                    ))}

                    <div className={styles.ctaBlock}>
                        <h3>Stop wasting time on manual invoices.</h3>
                        <p>Use DueBy app to create professional invoices in seconds, track payments, and get paid faster on your mobile device.</p>
                        <a href="https://apps.apple.com/us/app/invoice-generator/id6742449153" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/app-store-badge.svg"
                                alt="Download on the App Store"
                                width={140}
                                height={42}
                                style={{ height: '42px', width: 'auto' }}
                            />
                        </a>
                    </div>
                </div>

                {post.faq.length > 0 && (
                    <section className={styles.faqSection}>
                        <h2 className={styles.faqTitle}>FAQ</h2>
                        {post.faq.map((item, idx) => (
                            <div key={idx} className={styles.faqItem}>
                                <h3>{item.q}</h3>
                                <p>{item.a}</p>
                            </div>
                        ))}
                    </section>
                )}

                <div className={styles.footer}>
                    <Link href="/blog">← Back to Blog</Link>
                </div>
            </article>
        </div>
    );
}
