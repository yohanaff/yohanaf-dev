import { Locale } from '@/i18.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import styles from './page.module.css';

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  const { page } = await getDictionary(lang)

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.textContainer}>
          <div className={styles.typewriter}>
            <h1>Yohana Fernandes</h1>
            <h2>{page.home.description}</h2>
          </div>
        </div>
        <Image
          className={styles.heroImage}
          src="/yohana-fernandes-software-engineer-developer.jpg"
          alt="Yohana Fernandes"
          width={300}
          height={300}
          priority={true}
        />
      </section>
    </main >
  );
}