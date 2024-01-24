import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import ReactMarkdown from 'react-markdown';
import styles from './postContent.module.css';

interface Post {
    createdAt: string;
    title: string;
    content: string;
}

const client = generateClient<Schema>();

async function fetchPosts() {
    const { data: posts, errors } = await client.models.Posts.list();
    return posts;
}

export default async function PostContent() {
    const posts = await fetchPosts();
    return (
        <div>
            <ul>
                {posts.map((post: Post) => (
                    <div className={styles.articles}>
                        <li key={post.createdAt}>
                            <h2>{post.title}</h2>
                            <ReactMarkdown className={styles.postContent}>{post.content}</ReactMarkdown>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}