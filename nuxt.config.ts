// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["~/assets/style/main.scss"],
    runtimeConfig: {
        public: {
            directusUrl: process.env.NUXT_DIRECTUS_API_BASE || "http://localhost:8055"
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
        url: "https://nagrani.life",
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
                { property: "og:url", content: "https://nagrani.life" },
                { property: "og:image", content: "/images/og-image.jpg" }
            ],
            link: [
                { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" },
                { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
                { rel: "shortcut icon", href: "/favicon/favicon.ico" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
                { rel: "manifest", href: "/favicon/site.webmanifest" },
                { rel: "canonical", href: "https://nagrani.life" }
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

    modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "nuxt-aos", "@pinia/nuxt", "@nuxtjs/seo", "@vueuse/nuxt"]
});
