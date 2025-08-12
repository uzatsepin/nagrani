export default defineEventHandler(async (event) => {
  const baseUrl = 'https://nagrani.life'
  const currentDate = new Date().toISOString()
  
  // Static pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/courses', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' }
  ]
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`
  
  // Add static pages
  staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
  })
  
  sitemap += `</urlset>`
  
  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
})
