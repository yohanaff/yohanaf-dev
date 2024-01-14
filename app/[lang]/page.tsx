import { Locale } from '@/i18.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import styles from './page.module.css';
import yohanaFernandes from '@/public/yohana-fernandes-software-engineer-developer.jpg';

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  const { page } = await getDictionary(lang)

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.textContainer}>
            <div className={styles.typewriter}>
              <h1>Yohana Fernandes</h1>
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.typewriter}>
              <h2>{page.home.description}</h2>
            </div>
          </div>
        </div>
        <Image
          className={styles.heroImage}
          src={yohanaFernandes}
          alt='Yohana Fernandes Software Engineer Developer'
          width={300}
          height={300}
        />
      </section>
      <section className={styles.techStack}>
        <div>
          <h3>// Back-End</h3>
          <i className={`devicon-java-plain-wordmark ${styles.devIcon}`}></i>
          <i className={`devicon-spring-plain-wordmark ${styles.devIcon}`}></i>
          <i className={`devicon-apachekafka-original-wordmark ${styles.devIcon}`}></i>
        </div>
        <div>
          <h3>// Front-End</h3>
          <i className={`devicon-react-original-wordmark ${styles.devIcon}`}></i>
          <i className={`devicon-nextjs-original-wordmark ${styles.devIcon}`}></i>
          <i className={`devicon-typescript-plain ${styles.devIcon}`}></i>
          <i className={`devicon-javascript-plain ${styles.devIcon}`}></i>
          <i className={`devicon-html5-plain-wordmark ${styles.devIcon}`}></i>
          <i className={`devicon-css3-plain-wordmark ${styles.devIcon}`}></i>
        </div>
      </section>
    </main >
  );
}