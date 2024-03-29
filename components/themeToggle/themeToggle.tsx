'use client';

import React, { useState, useEffect } from 'react';
import styles from './themeToggle.module.css';

function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        const defaultTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light');
        setTheme(defaultTheme);
        document.body.className = defaultTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.className = newTheme;
    };

    return (
        <label className={styles.theme}>
            <span className={styles.themeToggleWrap}>
                <input
                    id='theme'
                    className={styles.themeToggle}
                    type='checkbox'
                    role='switch'
                    name='theme'
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                />
                <span className={styles.themeFill}></span>
                <span className={styles.themeIcon}>
                    {Array.from({ length: 9 }).map((_, index) => (
                        <span key={index} className={styles.themeIconPart}></span>
                    ))}
                </span>
            </span>
        </label>
    );
}

export default ThemeToggle;