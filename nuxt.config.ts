// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["~/assets/style/main.scss"],
    ssr: true,
    seo: {
        automaticDefaults: true
    },
    runtimeConfig: {
        public: {
            directusUrl: process.env.NUXT_DIRECTUS_API_BASE || "http://localhost:8055",
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://nagrani.life"
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "scss-reset"; @use "~/assets/style/_vars.scss" as *;'
                }
            }
        }
    },
    fonts: {
        families: [
            {
                name: "Russo One",
                provider: "google"
            }
        ]
    },
    site: {
        name: "NaGrani",
        description:
            "NaGrani – школа виживання й безпеки. Комплексні курси виживання в екстремальних умовах, тактичної медицини та самозахисту від досвідчених інструкторів.",
        url: process.env.NUXT_PUBLIC_SITE_URL || "https://nagrani.life",
        defaultLocale: "uk"
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "uk"
            },
            title: "Курси виживання, тактична медицина та самозахист",
            meta: [
                { name: "robots", content: "index, follow" },
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "format-detection", content: "telephone=no" },
                {
                    name: "description",
                    content:
                        "Школа виживання NaGrani - комплексні курси з виживання в екстремальних умовах, тактичної медицини, самозахисту та безпеки. Практичні навички та реальні кейси від професійних інструкторів з досвідом."
                },
                { name: "author", content: "Віталій Олійник - засновник та головний інструктор NaGrani" },
                { property: "og:type", content: "website" },
                { property: "og:title", content: "Курси виживання, тактична медицина та самозахист" },
                {
                    property: "og:description",
                    content: "Навчальні курси, які допоможуть вижити в будь-яких ситуаціях - від екстремальних природних умов до надзвичайних ситуацій у місті."
                },
                { property: "og:url", content: process.env.NUXT_PUBLIC_SITE_URL || "https://nagrani.life" },
                { property: "og:image", content: "/images/og-image.jpg" }
            ],
            link: [
                { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" },
                { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
                { rel: "shortcut icon", href: "/favicon/favicon.ico" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
                { rel: "manifest", href: "/favicon/site.webmanifest" },
                { rel: "canonical", href: process.env.NUXT_PUBLIC_SITE_URL || "https://nagrani.life" },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
                // Preload critical images
                { rel: "preload", href: "/images/hero-image.webp", as: "image", type: "image/webp" },
                { rel: "preload", href: "/images/logo.svg", as: "image", type: "image/svg+xml" },
                // DNS prefetch for external services
                { rel: "dns-prefetch", href: "https://stats.razserv.cloud" }
            ],
            script: [
                {
                    src: "https://stats.razserv.cloud/script.js",
                    defer: true,
                    "data-website-id": "a124282c-1073-44ce-80ba-3bb0d2857661"
                }
            ]
        }
    },

    modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "nuxt-aos", "@pinia/nuxt", "@nuxtjs/seo", "@vueuse/nuxt"],

    // // Image optimization
    image: {
        quality: 80,
        format: ["webp", "png", "jpg"],
        densities: [1, 2],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536
        },
        presets: {
            avatar: {
                modifiers: {
                    format: "webp",
                    width: 80,
                    height: 80,
                    quality: 80
                }
            },
            course: {
                modifiers: {
                    format: "webp",
                    quality: 85,
                    fit: "cover"
                }
            }
        },
        providers: {
            directus: {
                provider: "ipx",
                options: {
                    baseURL: process.env.NUXT_DIRECTUS_API_BASE || "http://localhost:8055",
                    modifiers: {
                        srcset: false
                    }
                }
            }
        }
    },

    experimental: {
        payloadExtraction: false,
        renderJsonPayloads: true
    },

    nitro: {
        minify: true,
        compressPublicAssets: true,
        // prerender: {
        //     routes: ['/']
        // },
        preset: "cloudflare-pages"
    },
    routeRules: {
        "/": {
            headers: {
                'cache-control': 'public, max-age=3600, s-maxage=3600'
            }
        },
        "/images/**": {
            headers: {
                "Cache-Control": "public, max-age=31536000, immutable"
            }
        },
        "/icons/**": {
            headers: {
                "Cache-Control": "public, max-age=31536000, immutable"
            }
        },
        "/_nuxt/**": {
            headers: {
                "Cache-Control": "public, max-age=31536000, immutable"
            }
        },
        "/_ipx/**": {
            headers: {
                "Cache-Control": "public, max-age=31536000, immutable"
            }
        }
    }
});
