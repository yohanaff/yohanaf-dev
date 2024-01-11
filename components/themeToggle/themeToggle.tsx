'use client';

import React, { useState, useEffect } from 'react';
import styles from './themeToggle.module.css';

function ThemeToggle() {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [theme, setTheme] = useState(prefersDarkMode ? 'dark' : 'light');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
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