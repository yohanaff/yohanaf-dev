import type { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import Markdown from 'react-markdown';
import styles from './article.module.css';

interface Post {
    id: string;
    title: string;
    content: string;
    slug?: string;
}

const client = generateClient<Schema>();

async function fetchPosts(slug: string) {
    const { data: posts } = await client.models.Posts.list();
    return posts.filter((post: Post) => post.slug === slug);
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
    const posts = await fetchPosts(params.slug);
    return (
        <div className={styles.article}>
            {posts.map((post: Post) => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <Markdown>{post.content}</Markdown>
                </div>
            ))}
        </div>
    );
}
