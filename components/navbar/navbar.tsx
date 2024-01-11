import { Locale } from '@/i18.config';
import { getDictionary } from '@/lib/dictionary';
import styles from './navbar.module.css';
import CustomLink from '../localeSwitcher/customLink';
import LocaleSwitcher from '../localeSwitcher/localeSwitcher';
import ThemeToggle from '../themeToggle/themeToggle';

async function Navbar({ lang }: { lang: Locale }) {
    const { navigation } = await getDictionary(lang)

    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <span>{'</>'}</span>
            </div>
            <div className={styles.localeSwitcher}>
                <LocaleSwitcher />
            </div>
            <ul className={styles.menuLinks}>
                <li>
                    <CustomLink href='/' lang={lang}>
                        {navigation.home}
                    </CustomLink>
                </li>
                <li>
                    <CustomLink href='/about' lang={lang}>
                        {navigation.about}
                    </CustomLink>
                </li>
            </ul>
            <div>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
