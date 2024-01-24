import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import styles from './articles.module.css';
import Link from 'next/link';

interface Post {
    createdAt: string;
    slug: string;
    title: string;
}

const client = generateClient<Schema>();

async function fetchPosts() {
    const { data: posts, errors } = await client.models.Posts.list();
    return posts;
}

export default async function Articles() {
    const posts = await fetchPosts();

    const sortedPosts = posts.sort((a: Post, b: Post) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return (
        <section className={styles.articles}>
            <ul>
                {sortedPosts.map((post: Post) => (
                    <li className={styles.articles} key={post.createdAt}>
                        <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                        <Link href={`/articles/${post.slug}`}>
                            <h2>{post.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}