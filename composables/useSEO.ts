/**
 * Composable for SEO optimization
 * Provides utilities for meta tags, structured data, and other SEO features
 */

interface SEOConfig {
    title: string
    description: string
    image?: string
    url?: string
    type?: 'website' | 'article' | 'product'
    author?: string
    publishedTime?: string
    modifiedTime?: string
}

interface StructuredDataConfig {
    type: 'Course' | 'Organization' | 'Article' | 'Product'
    data: Record<string, any>
}

export const useSEO = () => {
    /**
     * Set basic SEO meta tags
     */
    const setSEO = (config: SEOConfig) => {
        const {
            title,
            description,
            image = '/images/og-image.jpg',
            url = 'https://nagrani.life',
            type = 'website',
            author = 'NaGrani',
            publishedTime,
            modifiedTime
        } = config

        const meta: any[] = [
            { name: 'description', content: description },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:type', content: type },
            { property: 'og:url', content: url },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: author }
        ]

        if (publishedTime) {
            meta.push({ property: 'article:published_time', content: publishedTime })
        }

        if (modifiedTime) {
            meta.push({ property: 'article:modified_time', content: modifiedTime })
        }

        useHead({
            title,
            meta,
            link: [
                { rel: 'canonical', href: url }
            ]
        })
    }

    /**
     * Add structured data to the page
     */
    const setStructuredData = (config: StructuredDataConfig) => {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": config.type,
            ...config.data
        }

        useHead({
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify(structuredData)
                }
            ]
        })
    }

    /**
     * Generate optimized image URL for social sharing (SSR safe)
     */
    const getOptimizedImageUrl = (imageId: string, options: {
        width?: number
        height?: number
        quality?: number
    } = {}) => {
        const { width = 1200, height = 630, quality = 85 } = options
        
        // Используем переменную окружения напрямую для SSR
        const directusUrl = process.env.NUXT_DIRECTUS_API_BASE || 'https://nagrani.life'
        let url = `${directusUrl}/assets/${imageId}`
        
        const params = new URLSearchParams()
        if (width) params.append('width', width.toString())
        if (height) params.append('height', height.toString())
        params.append('fit', 'cover')
        if (quality) params.append('quality', quality.toString())
        
        const queryString = params.toString()
        if (queryString) {
            url += `?${queryString}`
        }
        
        return url
    }

    /**
     * Set course-specific SEO
     */
    const setCoursePageSEO = (course: any) => {
        if (!course) return
        
        const title = `${course.title} - NaGrani`
        const description = course.short_description || course.description?.substring(0, 160) || 'Курс виживання від NaGrani'
        const image = getOptimizedImageUrl(course.image)
        const url = `https://nagrani.life/course/${course.slug}`

        setSEO({
            title,
            description,
            image,
            url,
            type: 'article',
            publishedTime: course.date_created ? new Date(course.date_created).toISOString() : undefined,
            modifiedTime: course.date_updated ? new Date(course.date_updated).toISOString() : undefined
        })

        // Add course-specific structured data
        setStructuredData({
            type: 'Course',
            data: {
                name: course.title,
                description: description,
                provider: {
                    "@type": "Organization",
                    "name": "NaGrani",
                    "url": "https://nagrani.life"
                },
                image: image,
                offers: {
                    "@type": "Offer",
                    "price": course.price?.toString() || "0",
                    "priceCurrency": "UAH",
                    "availability": "https://schema.org/InStock",
                    "url": url
                },
                aggregateRating: course.rating ? {
                    "@type": "AggregateRating",
                    "ratingValue": course.rating?.toString(),
                    "ratingCount": course.students?.toString() || "1"
                } : undefined,
                timeRequired: course.duration,
                educationalLevel: "Beginner",
                inLanguage: "uk",
                dateCreated: course.date_created ? new Date(course.date_created).toISOString() : undefined,
                dateModified: course.date_updated ? new Date(course.date_updated).toISOString() : undefined
            }
        })
    }

    return {
        setSEO,
        setStructuredData,
        getOptimizedImageUrl,
        setCoursePageSEO
    }
}
