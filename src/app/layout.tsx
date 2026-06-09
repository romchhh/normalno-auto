import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Providers from './components/Providers'
import JsonLd from './components/JsonLd'
import { siteConfig } from '@/lib/site'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
})

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.titleRu,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.descriptionRu,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [{ url: '/blog/feed.xml', title: 'CardProc Blog RSS' }],
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.titleRu,
    description: siteConfig.descriptionRu,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.titleRu,
    description: siteConfig.descriptionRu,
    images: [siteConfig.ogImage],
  },
  category: 'finance',
  icons: {
    icon: siteConfig.ogImage,
    apple: siteConfig.ogImage,
  },
  other: {
    'content-language': siteConfig.seo.contentLanguages,
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="CardProc Blog RSS" href="/blog/feed.xml" />
        <link rel="alternate" type="text/plain" href="/ai.txt" title="AI information" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM information" />
        <JsonLd />
      </head>
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
