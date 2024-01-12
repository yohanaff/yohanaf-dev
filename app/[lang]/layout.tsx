import { Locale, i18n } from '@/i18.config';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../../components/navbar/navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yohana Fernandes | Software Engineer',
  description: 'Yohana Fernandes is a Software Engineer based in Brazil. She is passionate about technology and loves to learn new things.',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {

  const theme = 'dark'

  return (
    <html lang="en" className={theme === 'dark' ? 'dark-theme' : ''}>
      <body>
        <Navbar lang={params.lang} />
        <main>{children}</main>
      </body>
    </html >
  )
}
