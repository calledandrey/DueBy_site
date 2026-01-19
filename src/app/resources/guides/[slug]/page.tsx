import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Article, WithContext } from 'schema-dts';
import { JsonLd } from '@/components/seo/JsonLd';
import { getAllPostSlugs, getPostData } from '@/lib/posts';
import styles from './page.module.css';

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map((path) => path.params);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const postData = await getPostData(slug).catch(() => null);

    if (!postData) {
        return { title: 'Guide Not Found' };
    }

    return {
        title: `${postData.title} | DueBy Guides`,
        description: postData.excerpt,
    };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug).catch(() => null);

    if (!postData) {
        notFound();
    }

    const schema: WithContext<Article> = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: postData.title,
        datePublished: postData.date,
        description: postData.excerpt,
        author: {
            '@type': 'Organization',
            name: 'DueBy Team',
        },
    };

    return (
        <div className="container">
            <JsonLd data={schema} />
            <article className={styles.article}>
                <Link href="/resources" className={styles.backLink}>
                    ← Back to Resources
                </Link>

                <header className={styles.header}>
                    <div className={styles.meta}>{postData.date}</div>
                    <h1 className={styles.title}>{postData.title}</h1>
                </header>

                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
                />
            </article>
        </div>
    );
}
