import { Locale } from "@/i18.config";
import { getDictionary } from "@/lib/dictionary";
import styles from "./navbar.module.css";
import CustomLink from "../localeSwitcher/customLink";
import LocaleSwitcher from "../localeSwitcher/localeSwitcher";

async function Navbar({ lang }: { lang: Locale }) {
    const { navigation } = await getDictionary(lang)

    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <span>{'</>'}</span>
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
            <div className="locale-switcher">
                <LocaleSwitcher />
            </div>
        </nav >
    );
};

export default Navbar;
