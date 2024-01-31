import styles from './articles.module.css';
import Link from 'next/link';
import { Locale } from '@/i18.config';
import Image from 'next/image';
import axios from 'axios';

interface Post {
    createdAt: string;
    imageUrl: string;
    slug: string;
    titleEn: string;
    titlePt: string;
    titleEs: string;
}

async function fetchPosts() {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (!apiKey) {
        console.error("API key is missing");
        return [];
    }

    const query = `
        query ListPosts {
            listPosts {
                items {
                    createdAt
                    imageUrl
                    slug
                    titleEn
                    titlePt
                    titleEs
                }
            }
        }
    `;

    const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

    try {
        const response = await axios({
            url: endpoint,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
            data: {
                query,
            },
        });

        const posts = response.data.data.listPosts.items;
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
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