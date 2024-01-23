import { Locale } from '@/i18.config';
import { getDictionary } from '@/lib/dictionary';

export default async function Articles({
    params: { lang }
}: {
    params: { lang: Locale }
}) {

    const { page } = await getDictionary(lang)

    return (
        <main>
        </main >
    );
}