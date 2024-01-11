import React from 'react';
import styles from './themeToggle.module.css';

function ThemeToggle() {
    return (
        <label className={styles.theme}>
            <span className={styles.themeToggleWrap}>
                <input
                    id='theme'
                    className={styles.themeToggle}
                    type='checkbox'
                    role='switch'
                    name='theme'
                />
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