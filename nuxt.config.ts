// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["~/assets/style/main.scss"],
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
    app: {
        head: {
          htmlAttrs: {
            lang: 'uk'
          },
          title: 'NaGrani - Курси з виживання та безпеки',
          meta: [
            { name: 'robots', content: 'index, follow' },
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'format-detection', content: 'telephone=no' },
            { 
              name: 'description', 
              content: 'Школа виживання NaGrani - комплексні курси з виживання в екстремальних умовах, тактичної медицини, самозахисту та безпеки. Практичні навички та реальні кейси від професійних інструкторів з досвідом.'
            },
            { name: 'author', content: 'Віталій Олійник - засновник та головний інструктор NaGrani' },
            // Open Graph / Соціальні мережі
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: 'NaGrani - Школа виживання' },
            { 
              property: 'og:description', 
              content: 'Навчальні курси, які допоможуть вижити в будь-яких ситуаціях - від екстремальних природних умов до надзвичайних ситуацій у місті.'
            },
            { property: 'og:url', content: 'https://nagrani.com.ua' },
            { property: 'og:image', content: '/images/og-image.jpg' }
          ],
          link: [
            { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
            { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' }, 
            { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
            { rel: 'manifest', href: '/favicon/site.webmanifest' },
            { rel: 'canonical', href: 'https://nagrani.com.ua' }
          ]
        },
      },

    modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "nuxt-aos"]
});