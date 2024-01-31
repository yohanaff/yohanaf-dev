'use client';

import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import axios from 'axios';
import { Locale } from '@/i18.config';
import styles from './article.module.css';

interface ArticleProps {
    params: {
        lang: Locale;
        slug: string;
    };
}

export default function Article({ params: { lang, slug } }: ArticleProps) {
    const [markdownContent, setMarkdownContent] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const markdownUrl = `https://yohanaf-dev.s3.amazonaws.com/${slug}-${lang}.md`;

        axios.get(markdownUrl)
            .then(response => setMarkdownContent(response.data))
            .catch(err => setError(err));
    }, [lang, slug]);

    if (error) return <div>Error loading markdown content.</div>;
    if (!markdownContent) {
        return (
            <div className={`loadingContainer`}>
                <div className={`loadingSpinner`}></div>
            </div>
        );
    }

    return (
        <main>
            <article className={`${styles.article} markdownbody`}>
                <Markdown children={markdownContent} />
            </article>
        </main>
    );
}