import type {MetadataRoute} from 'next'
import {NextResponse} from 'next/server'

async function generateLandingSitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:3000'
  const lastModified = new Date()
  const staticPages = ['/'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastModified,
    priority: path === '/' ? 1 : 0.9,
  }))

  return [...staticPages] as MetadataRoute.Sitemap
}

export async function GET() {
  let sitemapData: MetadataRoute.Sitemap = []
  sitemapData = await generateLandingSitemap()
  // Convert sitemap object to XML
  const sitemapXml = generateSitemapXml(sitemapData)

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

function generateSitemapXml(sitemapData: MetadataRoute.Sitemap): string {
  const xmlUrls = sitemapData
    .map((item: MetadataRoute.Sitemap[number]) => {
      let lastmod = ''
      if (item.lastModified) {
        const date = typeof item.lastModified === 'string' ? new Date(item.lastModified) : item.lastModified
        lastmod = `<lastmod>${date.toISOString()}</lastmod>`
      }
      const changefreq = item.changeFrequency ? `<changefreq>${item.changeFrequency}</changefreq>` : ''
      const priority = item.priority ? `<priority>${item.priority}</priority>` : ''

      return `    <url>\n      <loc>${item.url}</loc>${lastmod}${changefreq}${priority}\n    </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8" ?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlUrls}\n</urlset>`
}
