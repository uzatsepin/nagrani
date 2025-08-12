/**
 * SEO Middleware
 * Handles redirects, canonical URLs and other SEO-related routing
 */

export default defineNuxtRouteMiddleware((to) => {
  // Ensure trailing slashes are handled consistently
  if (to.path !== '/' && to.path.endsWith('/')) {
    return navigateTo(to.path.slice(0, -1), { redirectCode: 301 })
  }

  // Handle old URLs or redirects here if needed
  // Example: redirect old course URLs
  if (to.path.startsWith('/courses/')) {
    const slug = to.path.replace('/courses/', '')
    return navigateTo(`/course/${slug}`, { redirectCode: 301 })
  }
})
