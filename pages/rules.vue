<template>
    <Header />
    <main class="rules-page">
        <div class="container">
            <div class="rules-content" v-if="data?.data">
                <div v-html="data.data.text" class="prose"></div>
            </div>
            <div v-else-if="status === 'pending'" class="loading">
                <p>Завантаження...</p>
            </div>
            <div v-else-if="error" class="error">
                <p>Помилка завантаження контенту</p>
            </div>
        </div>
    </main>
    <Footer />
</template>

<script setup lang="ts">
import type { PublicOfferResponse } from '~/types/offer.types'

const { data, status, error } = await useFetch<PublicOfferResponse>('/api/directus/items/rules', {
    server: true,
    headers: {
        'Content-Type': 'application/json'
    }
})


useSeoMeta({
    title: 'Правила і умови - NaGrani',
    description: 'Правила і умови використання онлайн-курсів та інформаційних матеріалів від NaGrani.',
    ogTitle: 'Правила і умови - NaGrani',
    ogDescription: 'Правила і умови використання онлайн-курсів та інформаційних матеріалів від NaGrani.',
    ogImage: '/images/og-image.jpg',
    ogUrl: 'https://nagrani.life/rules',
    twitterCard: 'summary_large_image',
    robots: 'noindex, nofollow'
})

// Структурированные данные для поисковых систем
useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: 'Правила і умови',
                description: 'Правила і умови використання онлайн-курсів та інформаційних матеріалів',
                url: 'https://nagrani.life/rules',
                inLanguage: 'uk-UA',
                isPartOf: {
                    '@type': 'WebSite',
                    name: 'NaGrani',
                    url: 'https://nagrani.life'
                }
            })
        }
    ]
})
</script>

<style scoped lang="scss">
@use "sass:color";

.rules-page {
    min-height: 80vh;
    padding: 100px 0 60px;
    background-color: $mainBlack;
    color: $white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.rules-content {
    margin: 0 auto;
    background-color: $secondBlack;
    border-radius: 12px;
    padding: 40px;
    border: 1px solid #333;
}

.loading, .error {
    text-align: center;
    padding: 60px 20px;
    font-size: 18px;
    color: $white;
}

.error {
    color: $accent;
}

// Стили для контента из Directus - тёмная тема с улучшенной читаемостью
.prose {
    line-height: 1.7;
    color: $white;
    font-size: 16px;
    max-width: none;

    // Основной заголовок документа
    :deep(h2) {
        color: $white;
        font-family: "Russo One", sans-serif;
        font-size: 1.75rem;
        font-weight: 600;
        margin: 3rem 0 2rem 0;
        padding: 1rem 0;
        position: relative;

        &:first-child {
            margin-top: 0;
            font-size: 2rem;
        }

        // Центрированные заголовки (главный заголовок)
        &[style*="text-align: center"] {
            text-align: center;
            color: $accent;
            border-bottom: 3px solid $accent;
            padding-bottom: 1rem;
            margin-bottom: 2.5rem;
        }

        // Обычные заголовки секций
        &:not([style*="text-align: center"]) {
            border-left: 4px solid $accent;
            padding-left: 1.5rem;
            background: linear-gradient(90deg, rgba($accent, 0.1) 0%, transparent 100%);
        }
    }

    // Параграфы с улучшенной читаемостью
    :deep(p) {
        margin: 1.5rem 0;
        color: #e5e5e5;
        line-height: 1.8;
        text-align: justify;
        
        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }

        // Подзаголовки в тексте
        &:has(strong:only-child) {
            font-size: 1.1rem;
            color: $accent;
            margin: 2rem 0 1rem 0;
        }
    }

    // Списки с улучшенным отступом
    :deep(ul) {
        margin: 2rem 0;
        padding: 0;
        background-color: rgba($secondBlack, 0.5);
        border-radius: 8px;
        padding: 1.5rem;
        border-left: 3px solid $accent;

        li {
            margin: 1.2rem 0;
            padding-left: 2rem;
            position: relative;
            color: #e5e5e5;
            line-height: 1.8;
            list-style: none;

            &::before {
                content: "→";
                color: $accent;
                font-weight: bold;
                position: absolute;
                left: 0;
                top: 0;
                font-size: 1.1em;
            }

            p {
                margin: 0.75rem 0;
                text-align: left;
                
                &:first-child {
                    margin-top: 0;
                }
                
                &:last-child {
                    margin-bottom: 0;
                }
            }

            // Вложенные списки
            ul {
                margin: 1rem 0;
                background: none;
                border: none;
                padding: 0 0 0 1rem;

                li {
                    margin: 0.8rem 0;
                    
                    &::before {
                        content: "•";
                        color: color.adjust($accent, $lightness: -10%);
                    }
                }
            }
        }
    }

    // Выделенный текст
    :deep(strong) {
        font-weight: 600;
        color: $white;
        
        // Заголовки секций
        &:has(+ br) {
            color: $accent;
            font-size: 1.1em;
            display: block;
            margin-bottom: 0.5rem;
        }
    }

    // Ссылки
    :deep(a) {
        color: $accent;
        text-decoration: underline;
        transition: all 0.3s ease;
        font-weight: 500;

        &:hover {
            color: color.adjust($accent, $lightness: 15%);
            text-decoration: none;
            background-color: rgba($accent, 0.1);
            padding: 2px 4px;
            border-radius: 3px;
        }
    }

    // Разделители
    :deep(hr) {
        margin: 4rem 0;
        border: none;
        height: 2px;
        background: linear-gradient(90deg, transparent 0%, $accent 50%, transparent 100%);
        position: relative;
        
        &::after {
            content: "";
            position: absolute;
            top: -1px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 4px;
            background-color: $accent;
            border-radius: 2px;
        }
    }

    // Блоки с контактной информацией и реквизитами
    :deep(p:has(strong:contains("Контактна інформація"))),
    :deep(p:has(strong:contains("АДРЕСА ТА РЕКВІЗИТИ"))) {
        background: linear-gradient(135deg, $thirdBlack 0%, color.adjust($thirdBlack, $lightness: -5%) 100%);
        padding: 2rem;
        border-radius: 12px;
        border: 1px solid #444;
        border-left: 5px solid $accent;
        margin: 3rem 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        
        strong {
            color: $accent;
            font-size: 1.2em;
            display: block;
            margin-bottom: 1rem;
        }
        
        br + * {
            margin-top: 0.5rem;
        }
    }

    // Улучшенная типографика для переносов строк
    :deep(br) {
        line-height: 2;
    }
}

// Адаптивність
@media (max-width: 768px) {
    .rules-page {
        padding: 80px 0 40px;
    }

    .container {
        padding: 0 16px;
    }

    .rules-content {
        padding: 24px;
        border-radius: 8px;
    }

    .prose {
        h2 {
            font-size: 1.25rem;
            margin: 2rem 0 1rem 0;
        }

        p, li {
            font-size: 15px;
        }

        ul {
            li {
                padding-left: 1.25rem;
            }
        }
    }
}
</style>
