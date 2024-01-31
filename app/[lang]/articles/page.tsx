import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import styles from './articles.module.css';
import Link from 'next/link';
import { Locale } from '@/i18.config';
import Image from 'next/image';

interface Post {
    createdAt: string;
    imageUrl: string;
    slug: string;
    titleEn: string;
    titlePt: string;
    titleEs: string;
}

const client = generateClient<Schema>({
    authMode: 'apiKey'
});

async function fetchPosts() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (!apiKey) {
        console.error("API key is missing");
        return [];
    }

    try {
        const { data: posts, errors } = await client.models.Posts.list({
            authMode: 'apiKey',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            }
        });

        if (errors) {
            console.error('Errors fetching posts:', errors);
        }

        return posts as Post[];
    } catch (error) {
        console.error('Error in fetchPosts:', error);
        return [];
    }
}

export default async function Articles({
    params: { lang }
}: {
    params: { lang: Locale }
}) {
    const posts = await fetchPosts();

    const sortedPosts = posts.sort((a: Post, b: Post) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return (
        <section className={styles.articles}>
            <ul>
                {sortedPosts.map((post: Post) => (
                    <li className={styles.articles} key={post.createdAt}>
                        <p className={styles.date}>{new Date(post.createdAt).toLocaleDateString()}</p>
                        <Image
                            className={styles.articleImage}
                            src={`https://yohanaf-dev.s3.amazonaws.com/${post.slug}.png`}
                            alt={post.titleEn}
                            width={300}
                            height={200}
                            layout="responsive" />
                        <Link href={`/articles/${post.slug}`}>
                            <h2>{lang === 'pt' ? post.titlePt : lang === 'es' ? post.titleEs : post.titleEn}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}