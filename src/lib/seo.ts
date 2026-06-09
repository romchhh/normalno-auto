import type { Metadata } from 'next'
import { localeOgLocale, localePath, type Locale } from './i18n/config'
import { siteConfig } from './site'

type PageMetaInput = {
  title: string
  description: string
  path: string
  locale: Locale
  keywords?: string[]
  ogTitle?: string
  noIndex?: boolean
}

type ArticleMetaInput = {
  title: string
  description: string
  path: string
  locale: Locale
  image: string
  imageAlt: string
  publishedTime: string
  modifiedTime?: string
  category: string
  keywords?: string[]
  ogTitle?: string
}

const googleBot = {
  index: true,
  follow: true,
  'max-image-preview': 'large' as const,
  'max-snippet': -1,
  'max-video-preview': -1,
}

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}

function buildHreflang(path: string, locale: Locale) {
  return {
    canonical: localePath(path, locale),
    languages: {
      'ru-RU': localePath(path, 'ru'),
      'en-US': localePath(path, 'en'),
      'x-default': localePath(path, 'ru'),
    },
  }
}

function buildSharedMeta({
  title,
  description,
  keywords,
  ogTitle,
  path,
  locale,
  noIndex = false,
}: {
  title: string
  description: string
  keywords?: string[]
  ogTitle?: string
  path: string
  locale: Locale
  noIndex?: boolean
}) {
  const localizedPath = localePath(path, locale)
  const url = absoluteUrl(localizedPath)
  const ogLocale = localeOgLocale(locale)
  const alternateOgLocale = localeOgLocale(locale === 'ru' ? 'en' : 'ru')

  return {
    title,
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: noIndex ? undefined : buildHreflang(path, locale),
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot },
    other: {
      'content-language': locale,
    },
    openGraph: {
      locale: ogLocale,
      alternateLocale: [alternateOgLocale],
      url,
      siteName: siteConfig.name,
      title: ogTitle ?? title,
      description,
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
      card: 'summary_large_image' as const,
      title: ogTitle ?? title,
      description,
      images: [siteConfig.ogImage],
    },
  }
}

export function buildPageMetadata({
  title,
  description,
  path,
  locale,
  keywords,
  ogTitle,
  noIndex = false,
}: PageMetaInput): Metadata {
  const shared = buildSharedMeta({ title, description, keywords, ogTitle, path, locale, noIndex })

  return {
    ...shared,
    openGraph: {
      ...shared.openGraph,
      type: 'website',
    },
  }
}

export function buildArticleMetadata({
  title,
  description,
  path,
  locale,
  image,
  imageAlt,
  publishedTime,
  modifiedTime,
  category,
  keywords,
  ogTitle,
}: ArticleMetaInput): Metadata {
  const shared = buildSharedMeta({
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords,
    ogTitle: ogTitle ?? title,
    path,
    locale,
  })
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image)

  return {
    ...shared,
    title: `${title} | ${siteConfig.name}`,
    openGraph: {
      ...shared.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime: modifiedTime ?? publishedTime,
      section: category,
      authors: [siteConfig.name],
      tags: keywords,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      ...shared.twitter,
      images: [ogImage],
    },
  }
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: Locale,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(localePath(item.path, locale)),
    })),
  }
}

export function buildGraphJsonLd(nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.map(({ '@context': _context, ...node }) => node),
  }
}

export function buildWebPageJsonLd({
  title,
  description,
  path,
  locale,
  dateModified,
}: {
  title: string
  description: string
  path: string
  locale: Locale
  dateModified?: string
}) {
  const localizedPath = localePath(path, locale)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(localizedPath)}#webpage`,
    url: absoluteUrl(localizedPath),
    name: title,
    description,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#service` },
    inLanguage: locale,
    ...(dateModified ? { dateModified } : {}),
  }
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
