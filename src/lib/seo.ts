import type { Metadata } from 'next'
import { siteConfig } from './site'

type PageMetaInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogTitle?: string
  noIndex?: boolean
}

type ArticleMetaInput = {
  title: string
  description: string
  path: string
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

function buildSharedMeta({
  title,
  description,
  keywords,
  ogTitle,
  path,
  noIndex = false,
}: {
  title: string
  description: string
  keywords?: string[]
  ogTitle?: string
  path: string
  noIndex?: boolean
}) {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: noIndex
      ? undefined
      : {
          canonical: path,
        },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot },
    other: {
      'content-language': siteConfig.seo.contentLanguages,
    },
    openGraph: {
      locale: siteConfig.locale,
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
  keywords,
  ogTitle,
  noIndex = false,
}: PageMetaInput): Metadata {
  const shared = buildSharedMeta({ title, description, keywords, ogTitle, path, noIndex })

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
  image,
  imageAlt,
  publishedTime,
  modifiedTime,
  category,
  keywords,
  ogTitle,
}: ArticleMetaInput): Metadata {
  const shared = buildSharedMeta({
    title: `${title} | CardProc`,
    description,
    keywords,
    ogTitle: ogTitle ?? title,
    path,
  })
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image)

  return {
    ...shared,
    title: `${title} | CardProc`,
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

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
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
  dateModified,
}: {
  title: string
  description: string
  path: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#service` },
    inLanguage: ['ru', 'en'],
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
