import { Locale } from '@/i18.config';
import { getDictionary } from '@/lib/dictionary';
import styles from './navbar.module.css';
import CustomLink from '../localeSwitcher/customLink';
import LocaleSwitcher from '../localeSwitcher/localeSwitcher';
import ThemeToggle from '../themeToggle/themeToggle';
import { GiHamburgerMenu } from "react-icons/gi";

async function Navbar({ lang }: { lang: Locale }) {
    const { navigation } = await getDictionary(lang)

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLeftSide}>
                <CustomLink href="/" lang={lang}>
                    <span className={styles.logo}>{'</>'}</span>
                </CustomLink>
                <div className={styles.localeSwitcher}>
                    <LocaleSwitcher />
                </div>
            </div>
            <input type="checkbox" id="navbar-toggle" className={styles.navbarToggle} />
            <label htmlFor="navbar-toggle" className={styles.navbarIcon}><GiHamburgerMenu /></label>
            <div className={styles.navbarLinksContainer}>
                <ul className={styles.navbarLinks}>
                    <div className={styles.localeSwitcherMobile}>
                        <LocaleSwitcher />
                    </div>
                    <li className={styles.navbarLinksList}>
                        <CustomLink href='/' lang={lang}>
                            {navigation.home}
                        </CustomLink>
                    </li>
                    <li className={styles.navbarLinksList}>
                        <CustomLink href='/about' lang={lang}>
                            {navigation.about}
                        </CustomLink>
                    </li>
                    <div className={styles.themeToggleMobile}>
                        <ThemeToggle />
                    </div>
                </ul>
            </div>
            <div className={styles.themeToggle}>
                <ThemeToggle />
            </div>
        </nav>
    );
}

export default Navbar;
