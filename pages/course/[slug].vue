<template>
    <div class="course-page">
        <!-- Header -->
        <Header />
        
        <!-- Loading State -->
        <div v-if="status === 'pending'" class="loading-state">
            <NuxtLayout name="container">
                <div class="loading-content">
                    <div class="loading-spinner"></div>
                    <p>Завантаження курсу...</p>
                </div>
            </NuxtLayout>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="error-state">
            <NuxtLayout name="container">
                <div class="error-content">
                    <Icon name="lucide:alert-circle" size="48" class="error-icon" />
                    <h2>Курс не знайдено</h2>
                    <p>На жаль, курс з такою адресою не існує або був видалений.</p>
                    <NuxtLink to="/" class="back-link">
                        <OthersPrimaryButton>
                            Повернутися на головну
                        </OthersPrimaryButton>
                    </NuxtLink>
                </div>
            </NuxtLayout>
        </div>

        <!-- Course Content -->
        <div v-else-if="course" class="course-content">
            <!-- Hero Section -->
            <section class="course-hero">
                <NuxtLayout name="container">
                    <div class="course-hero__grid">
                        <div class="course-hero__content">
                            <div class="course-hero__breadcrumbs">
                                <NuxtLink to="/" class="breadcrumb-link">Головна</NuxtLink>
                                <Icon name="lucide:chevron-right" size="16" />
                                <NuxtLink to="/#courses" class="breadcrumb-link">Курси</NuxtLink>
                                <Icon name="lucide:chevron-right" size="16" />
                                <span class="breadcrumb-current">{{ course.title }}</span>
                            </div>
                            
                            <h1 class="course-hero__title">{{ course.title }}</h1>
                            <p class="course-hero__short-desc">{{ course.short_description }}</p>
                            
                            <div class="course-hero__meta">
                                <div class="meta-item">
                                    <Icon name="lucide:clock" size="18" />
                                    <span>{{ course.duration }}</span>
                                </div>
                                <div class="meta-item">
                                    <Icon name="lucide:users" size="18" />
                                    <span>{{ course.students }}</span>
                                </div>
                                <div class="meta-item">
                                    <Icon name="lucide:star" size="18" />
                                    <span>{{ course.rating }}</span>
                                </div>
                            </div>
                            
                            <div class="course-hero__price">
                                <span v-if="course.old_price && course.old_price > course.price" class="old-price">
                                    {{ formatPrice(course.old_price) }} ₴
                                </span>
                                <span class="current-price">{{ formatPrice(course.price) }} ₴</span>
                            </div>
                            
                            <OthersPrimaryButton 
                                class="course-hero__cta"
                                @click="openContactModal"
                            >
                                ХОЧУ НА ІНТЕНСИВ
                            </OthersPrimaryButton>
                        </div>
                        
                        <div class="course-hero__media">
                            <div class="media-container">
                                <NuxtImg
                                    :src="getDirectusImageUrl(course.image)"
                                    :alt="course.title"
                                    class="course-image"
                                    width="600"
                                    height="590"
                                />
                                <!-- PDF Presentation Overlay -->
                                <div v-if="course.presentation" class="presentation-overlay">
                                    <button class="presentation-button" @click="openPresentation">
                                        <Icon name="lucide:file-text" size="24" />
                                        <span>Переглянути презентацію</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </NuxtLayout>
            </section>

            <!-- Course Description -->
            <section class="course-description">
                <NuxtLayout name="container">
                    <div class="course-description__grid">
                        <div class="course-description__content">
                            <h2 class="section-title">Про курс</h2>
                            <div class="description-text" v-html="course.description"></div>
                        </div>
                        
                        <div class="course-description__sidebar">
                            <div class="info-card">
                                <h3 class="info-card__title">Деталі курсу</h3>
                                <ul class="info-list">
                                    <li class="info-item">
                                        <Icon name="lucide:calendar" size="18" />
                                        <span>Тривалість: {{ course.duration }}</span>
                                    </li>
                                    <li class="info-item">
                                        <Icon name="lucide:users" size="18" />
                                        <span>Учасників: {{ course.students }}</span>
                                    </li>
                                    <li class="info-item">
                                        <Icon name="lucide:award" size="18" />
                                        <span>Рейтинг: {{ course.rating }}</span>
                                    </li>
                                </ul>
                                
                                <div class="price-section">
                                    <div class="price-display">
                                        <span v-if="course.old_price && course.old_price > course.price" class="old-price">
                                            {{ formatPrice(course.old_price) }} ₴
                                        </span>
                                        <span class="current-price">{{ formatPrice(course.price) }} ₴</span>
                                    </div>
                                    
                                    <OthersPrimaryButton 
                                        class="sidebar-cta"
                                        @click="openContactModal"
                                    >
                                        ЗАПИСАТИСЯ
                                    </OthersPrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </NuxtLayout>
            </section>

            <!-- What You'll Learn Section -->
            <section class="course-benefits">
                <NuxtLayout name="container">
                    <h2 class="section-title">Що ви отримаєте</h2>
                    <div class="benefits-grid">
                        <div class="benefit-item">
                            <div class="benefit-icon">
                                <Icon name="lucide:brain" size="32" />
                            </div>
                            <h3>Практичні навички</h3>
                            <p>Реальні знання, які можна застосувати в життєвих ситуаціях</p>
                        </div>
                        <div class="benefit-item">
                            <div class="benefit-icon">
                                <Icon name="lucide:book-marked" size="32" />
                            </div>
                            <h3>КОРИСНІ МАТЕРІАЛИ</h3>
                            <p>Методичка з описом алгоритму дій. Опис медичних засобів для зупинки масивних кровотеч які є сертифіковані та рекомендовані. Різні корисні посилання.</p>
                        </div>
                        <div class="benefit-item">
                            <div class="benefit-icon">
                                <Icon name="lucide:users" size="32" />
                            </div>
                            <h3>Спільнота</h3>
                            <p>Доступ до закритої спільноти однодумців</p>
                        </div>
                        <div class="benefit-item">
                            <div class="benefit-icon">
                                <Icon name="lucide:headphones" size="32" />
                            </div>
                            <h3>Підтримка</h3>
                            <p>Консультації від інструкторів після завершення курсу</p>
                        </div>
                    </div>
                </NuxtLayout>
            </section>

            <!-- CTA Section -->
            <section class="course-cta">
                <NuxtLayout name="container">
                    <div class="cta-content">
                        <h2>Готові почати навчання?</h2>
                        <p>Приєднуйтесь до курсу та отримайте навички, які можуть врятувати життя</p>
                        <OthersPrimaryButton 
                            class="cta-button"
                            @click="openContactModal"
                        >
                            ХОЧУ НА ІНТЕНСИВ
                        </OthersPrimaryButton>
                    </div>
                </NuxtLayout>
            </section>
        </div>

        <!-- Footer -->
        <Footer />
        
        <!-- Contact Modal -->
        <!-- Modal is handled globally in app.vue through contactsStore -->
    </div>
</template>

<script setup lang="ts">
import type { Course } from '~/types/course.types'
import { getDirectusImageUrlUniversal } from '~/utils/directusImgSSR'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const { setCoursePageSEO } = useSEO()
const contactsStore = useContactsStore()

// Загружаем курс на сервере для правильного SEO
const { data: course, error, status } = await useLazyAsyncData(
    `course-${slug.value}`,
    async () => {
        const coursesStore = useCoursesStore()
        
        // Пытаемся найти курс в store
        let foundCourse = coursesStore.courses.find(c => c.slug === slug.value)
        
        // Если курс не найден, загружаем все курсы
        if (!foundCourse) {
            try {
                await coursesStore.fetchCourses()
                foundCourse = coursesStore.courses.find(c => c.slug === slug.value)
            } catch (fetchError) {
                console.error('Error fetching courses:', fetchError)
                throw createError({
                    statusCode: 404,
                    statusMessage: 'Course not found'
                })
            }
        }
        
        if (!foundCourse) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Course not found'
            })
        }
        
        return foundCourse
    },
    {
        transform: (data: Course) => data,
        default: () => null
    }
)

// Устанавливаем SEO когда курс загружен
watch(course, (newCourse) => {
    if (newCourse) {
        setCoursePageSEO(newCourse)
    }
}, { immediate: true })

// Устанавливаем базовые мета-теги для случая загрузки
const ogImage = computed(() => {
    if (course.value) {
        return getDirectusImageUrlUniversal(course.value.image, { 
            width: 1200, 
            height: 630, 
            quality: 85, 
            fit: 'cover' 
        })
    }
    return '/images/og-image.jpg'
})

const config = useRuntimeConfig()

useHead(() => {
    if (course.value) {
        return {
            title: `${course.value.title} - NaGrani`,
            meta: [
                { name: 'description', content: course.value.short_description },
                { property: 'og:title', content: `${course.value.title} - NaGrani` },
                { property: 'og:description', content: course.value.short_description },
                { property: 'og:image', content: ogImage.value },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:type', content: 'article' },
                { property: 'og:url', content: `${config.public.siteUrl || 'https://nagrani.life'}/course/${course.value.slug}` },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: `${course.value.title} - NaGrani` },
                { name: 'twitter:description', content: course.value.short_description },
                { name: 'twitter:image', content: ogImage.value },
            ]
        }
    }
    
    return {
        title: 'Курс - NaGrani',
        meta: [
            { name: 'description', content: 'Курс виживання від NaGrani' }
        ]
    }
})

// Methods
const openContactModal = () => {
    try {
        contactsStore.contactPopup = true
    } catch (e) {
        console.error('Error opening contact modal:', e)
    }
}

const openPresentation = () => {
    if (course.value?.presentation) {
        const presentationUrl = `https://admin.nagrani.life/assets/${course.value.presentation}`
        window.open(presentationUrl, '_blank')
    }
}
</script>

<style scoped lang="scss">
.course-page {
    min-height: 100vh;
    background-color: $mainBlack;
    color: $white;
}

// Loading & Error States
.loading-state,
.error-state {
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loading-content,
.error-content {
    text-align: center;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid #333;
    border-top: 3px solid $accent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.error-icon {
    color: $accent;
    margin-bottom: 20px;
}

.error-content h2 {
    font-family: "Russo One", sans-serif;
    margin-bottom: 16px;
}

.error-content p {
    color: #a0a0a0;
    margin-bottom: 24px;
}

// Hero Section
.course-hero {
    padding: 100px 0 80px;
    
    &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 60px;
        align-items: center;
        
        @media (min-width: 992px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    
    &__breadcrumbs {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 24px;
        color: #a0a0a0;
        font-size: 14px;
        
        .breadcrumb-link {
            color: #a0a0a0;
            text-decoration: none;
            transition: color 0.3s;
            
            &:hover {
                color: $accent;
            }
        }
        
        .breadcrumb-current {
            color: $accent;
        }
    }
    
    &__title {
        font-family: "Russo One", sans-serif;
        font-size: clamp(28px, 5vw, 48px);
        margin-bottom: 20px;
        line-height: 1.2;
    }
    
    &__short-desc {
        font-size: 18px;
        color: #a0a0a0;
        margin-bottom: 32px;
        line-height: 1.6;
    }
    
    &__meta {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        margin-bottom: 32px;
        
        .meta-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #a0a0a0;
            
            svg {
                color: $accent;
            }
        }
    }
    
    &__price {
        margin-bottom: 32px;
        
        .old-price {
            color: #666;
            text-decoration: line-through;
            margin-right: 12px;
            font-size: 16px;
        }
        
        .current-price {
            font-family: "Russo One", sans-serif;
            font-size: 24px;
            color: $accent;
        }
    }
    
    &__cta {
        font-size: 16px;
        padding: 16px 32px;
    }
}

.course-hero__media {
    .media-container {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        
        .course-image {
            width: 100%;
            height: 590px;
            object-fit: cover;

            @media screen and (max-width: 767px) {
                height: 390px;
            }
        }
        
        .video-overlay,
        .presentation-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s;
            
            // На мобильных всегда показываем кнопку презентации
            @media (max-width: 768px) {
                &.presentation-overlay {
                    opacity: 1;
                }
            }
            
            &:hover {
                opacity: 1;
            }
            
            .play-button,
            .presentation-button {
                background: $accent;
                border: none;
                border-radius: 12px;
                padding: 16px 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                color: white;
                cursor: pointer;
                transition: transform 0.3s;
                font-weight: 600;
                
                &:hover {
                    transform: scale(1.05);
                }
                
                span {
                    font-size: 14px;
                }
                
                // Улучшенные стили для мобильных
                @media (max-width: 768px) {
                    &.presentation-button {
                        padding: 12px 20px;
                        border-radius: 8px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                        
                        span {
                            font-size: 13px;
                        }
                    }
                }
            }
            
            .play-button {
                border-radius: 50%;
                width: 60px;
                height: 60px;
                padding: 0;
                
                span {
                    display: none;
                }
            }
        }
    }
}

// Description Section
.course-description {
    padding: 80px 0;
    background-color: $secondBlack;
    
    &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 60px;
        
        @media (min-width: 992px) {
            grid-template-columns: 2fr 1fr;
        }
    }
}

.section-title {
    font-family: "Russo One", sans-serif;
    font-size: 32px;
    margin-bottom: 32px;
    color: $white;
}

.description-text {
    color: #FFF;
    line-height: 1.8;
    font-size: 16px;
    
    :deep(p) {
        margin-bottom: 20px;
        
        &:last-child {
            margin-bottom: 0;
        }
    }
    
    :deep(h2) {
        color: $white;
        font-weight: 600;
        margin: 32px 0 16px;
        font-size: 24px;
    }

    :deep(h3) {
        color: $white;
        font-weight: 600;
        margin: 32px 0 16px;
    }
    
    :deep(ul) {
        padding-left: 20px;
        margin-bottom: 20px;
        
        li {
            margin-bottom: 8px;
            list-style: disc;
        }
    }

    :deep(blockquote) {
        padding: 12px 16px;
        background-color: color-mix(in srgb, $secondBlack 95%, black 5%);
        border-left: 4px solid $accent;
    }
}

// Sidebar
.info-card {
    background-color: $thirdBlack;
    border-radius: 12px;
    padding: 32px;
    border: 1px solid #333;
    
    &__title {
        font-family: "Russo One", sans-serif;
        font-size: 20px;
        margin-bottom: 24px;
        color: $white;
    }
}

.info-list {
    margin-bottom: 32px;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    color: #a0a0a0;
    
    &:last-child {
        margin-bottom: 0;
    }
    
    svg {
        color: $accent;
        flex-shrink: 0;
    }
}

.price-section {
    border-top: 1px solid #333;
    padding-top: 24px;
}

.price-display {
    margin-bottom: 20px;
    
    .old-price {
        display: block;
        color: #666;
        text-decoration: line-through;
        margin-bottom: 4px;
        font-size: 14px;
    }
    
    .current-price {
        font-family: "Russo One", sans-serif;
        font-size: 28px;
        color: $accent;
    }
}

.sidebar-cta {
    width: 100%;
}

// Benefits Section
.course-benefits {
    padding: 80px 0;
    background-color: $mainBlack;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
}

.benefit-item {
    text-align: center;
    
    .benefit-icon {
        width: 80px;
        height: 80px;
        background-color: $accent-light;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
        
        svg {
            color: $accent;
        }
    }
    
    h3 {
        font-family: "Russo One", sans-serif;
        font-size: 20px;
        margin-bottom: 12px;
        color: $white;
    }
    
    p {
        color: #a0a0a0;
        line-height: 1.6;
    }
}

// CTA Section
.course-cta {
    padding: 80px 0;
    background-color: $secondBlack;
}

.cta-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    
    h2 {
        font-family: "Russo One", sans-serif;
        font-size: 32px;
        margin-bottom: 16px;
        color: $white;
    }
    
    p {
        font-size: 18px;
        color: #a0a0a0;
        margin-bottom: 32px;
        line-height: 1.6;
    }
}

.cta-button {
    font-size: 18px;
    padding: 18px 40px;
}

// Responsive
@media (max-width: 768px) {
    .course-hero {
        padding: 0;
        
        &__grid {
            gap: 40px;
        }
        
        &__meta {
            gap: 16px;
            
            .meta-item {
                font-size: 14px;
            }
        }
    }
    
    .course-description {
        padding: 60px 0;
        
        &__grid {
            gap: 40px;
        }
    }
    
    .section-title {
        font-size: 24px;
        margin-bottom: 24px;
    }
    
    .info-card {
        padding: 24px;
    }
    
    .course-benefits,
    .course-cta {
        padding: 60px 0;
    }
    
    .benefits-grid {
        gap: 32px;
    }
}
</style>