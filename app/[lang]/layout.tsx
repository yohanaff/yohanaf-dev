import { Locale, i18n } from '@/i18.config';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../../components/navbar/navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yohana Fernandes | Software Engineer',
  description: 'Yohana Fernandes is a Software Engineer based in Brazil. She is passionate about technology and loves to learn new things.',
  openGraph: {
    images: [
      {
        url: 'https://www.yohanaf.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyohana-fernandes-software-engineer-developer.199b4ef3.jpg&w=384&q=75',
        width: 300,
        height: 300,
        alt: 'Yohana Fernandes Software Engineer'
      }
    ]
  }
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
