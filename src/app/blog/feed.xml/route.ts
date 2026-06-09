import { getAllPosts } from '@/lib/blog'
import { absoluteUrl, escapeXml } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export function GET() {
  const posts = getAllPosts()
  const channelTitle = escapeXml(siteConfig.pages.blog.title)
  const channelDescription = escapeXml(siteConfig.pages.blog.description)
  const feedUrl = absoluteUrl('/blog/feed.xml')
  const blogUrl = absoluteUrl('/blog')

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`)
      const title = escapeXml(post.ru.title)
      const description = escapeXml(post.ru.excerpt)
      const category = escapeXml(post.ru.category)
      const image = escapeXml(absoluteUrl(post.image))

      return `<item>
  <title>${title}</title>
  <link>${url}</link>
  <guid isPermaLink="true">${url}</guid>
  <description>${description}</description>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  <category>${category}</category>
  <enclosure url="${image}" type="image/png" />
</item>`
    })
    .join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${channelTitle}</title>
    <link>${blogUrl}</link>
    <description>${channelDescription}</description>
    <language>ru</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
