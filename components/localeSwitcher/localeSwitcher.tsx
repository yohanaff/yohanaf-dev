'use client';

import brazilFlag from '@/public/brazil.png';
import spainFlag from '@/public/spain.png';
import unitedStatesFlag from '@/public/united-states.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './localeSwitcher.module.css';

import { i18n } from '@/i18.config';

function LocaleSwitcher() {
    const pathName = usePathname();
    const isLocaleInPath = i18n.locales.some(locale => pathName.startsWith(`/${locale}`));
    const currentLocale = isLocaleInPath ? pathName.split('/')[1] : i18n.defaultLocale;

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/';

        const pathnameIsMissingLocale = i18n.locales.every(
            (loc) => !pathName.startsWith(`/${loc}/`) && pathName !== `/${loc}`
        );

        if (pathnameIsMissingLocale) {
            return locale === i18n.defaultLocale ? pathName : `/${locale}${pathName}`;
        } else {
            const segments = pathName.split('/');
            if (locale === i18n.defaultLocale) {
                if (segments.length === 2) return '/';
                segments.splice(1, 1);
                return segments.join('/');
            } else {
                segments[1] = locale;
                return segments.join('/');
            }
        }
    };

    const getFlagImage = (locale: string) => {
        switch (locale) {
            case 'pt':
                return brazilFlag;
            case 'en':
                return unitedStatesFlag;
            case 'es':
                return spainFlag;
            default:
                return unitedStatesFlag;
        }
    };

    return (
        <ul className={styles.localeSwitcher}>
            {i18n.locales.map((locale) => {
                const flagImage = getFlagImage(locale);
                const imageClassName = locale === currentLocale ? '' : styles.grayscale;
                return (
                    <li key={locale}>
                        <Link href={redirectedPathName(locale)} passHref>
                            <Image src={flagImage} width={25} height={25} alt={`${locale} Flag`} className={imageClassName} />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default LocaleSwitcher;