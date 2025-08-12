export default defineEventHandler((event) => {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://nagrani.life/sitemap.xml

# Block admin and private directories
Disallow: /admin/
Disallow: /_nuxt/
Disallow: /api/

# Allow all pages for SEO
Allow: /
Allow: /course/
Allow: /about
Allow: /contact`

  setHeader(event, 'Content-Type', 'text/plain')
  return robotsTxt
})
