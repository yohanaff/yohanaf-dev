import { Locale } from '@/i18.config';
import { getDictionary } from '@/lib/dictionary';
import styles from './about.module.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default async function About({
    params: { lang }
}: {
    params: { lang: Locale }
}) {

    const { page } = await getDictionary(lang);

    const linkedinURL = "https://www.linkedin.com/in/yohanaf";
    const twitterURL = "https://twitter.com/YohanaFS";
    const githubURL = "https://github.com/yohanaff";

    return (
        <main>
            <section className={styles.aboutContainer}>
                <h1>{page.about.title}</h1>
                <h2>{page.about.subTitle}</h2>
                <p>{page.about.description}</p>
                <h3>{page.about.whatIDo}</h3>
                <ul>
                    {page.about.whatIDoDescription.map((description, index) => {
                        return <li key={index}>{description}</li>
                    })}
                </ul>
                <h3>{page.about.languageSkillsTitle}</h3>
                <ul>
                    {page.about.languageSkillsDescription.map((description, index) => {
                        return <li key={index}>{description}</li>
                    })}
                </ul>
                <div className={styles.socialLinks}>
                    <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href={githubURL} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href={twitterURL} target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </div>
            </section>
        </main >
    );
}
