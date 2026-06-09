import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import BlogPage from '../components/BlogPage'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/seo/Breadcrumbs'
import JsonLdScript from '../components/seo/JsonLdScript'
import { buildBlogItemListJsonLd } from '@/lib/blog-seo'
import { getAllPosts } from '@/lib/blog'
import { buildBreadcrumbJsonLd, buildGraphJsonLd, buildPageMetadata, buildWebPageJsonLd } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: siteConfig.pages.blog.title,
    description: siteConfig.pages.blog.description,
    path: '/blog',
    keywords: [
      'блог CardProc',
      'статьи Stripe',
      'процессинг платежей',
      'интеграция Stripe',
      'payment routing',
      'Stripe webhooks',
      'Stripe blog',
      'payment processing articles',
      'high-risk Stripe',
      'международные платежи',
    ],
  }),
  alternates: {
    canonical: '/blog',
    types: {
      'application/rss+xml': [{ url: '/blog/feed.xml', title: 'CardProc Blog RSS' }],
    },
  },
}

const posts = getAllPosts()

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'CardProc', path: '/' },
  { name: 'Блог', path: '/blog' },
])

const webPage = buildWebPageJsonLd({
  title: siteConfig.pages.blog.title,
  description: siteConfig.pages.blog.description,
  path: '/blog',
})

const blogSchema = {
  '@type': 'Blog',
  '@id': `${siteConfig.url}/blog#blog`,
  url: `${siteConfig.url}/blog`,
  name: siteConfig.pages.blog.title,
  description: siteConfig.pages.blog.description,
  publisher: { '@id': `${siteConfig.url}/#organization` },
  blogPost: posts.map((post) => ({
    '@type': 'BlogPosting',
    '@id': `${siteConfig.url}/blog/${post.slug}#article`,
    headline: post.ru.title,
    description: post.ru.excerpt,
    datePublished: post.date,
    url: `${siteConfig.url}/blog/${post.slug}`,
  })),
  inLanguage: ['ru', 'en'],
}

const itemList = buildBlogItemListJsonLd(posts, 'ru')

export default function Blog() {
  return (
    <>
      <JsonLdScript data={buildGraphJsonLd([breadcrumb, webPage, blogSchema, itemList])} />
      <Navbar />
      <Breadcrumbs
        items={[
          { name: 'CardProc', path: '/' },
          { name: 'Блог', path: '/blog' },
        ]}
      />
      <main>
        <BlogPage />
      </main>
      <Footer />
    </>
  )
}
