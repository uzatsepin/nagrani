<template>
    <section
        id="about"
        class="about">
        <NuxtLayout name="container">
            <div class="about__header">
                <span class="about__badge">
                    <span>ІСТОРІЯ ПРОЄКТУ</span>
                </span>
                <h2 class="about__title">ПРО <span class="about__title-accent">ПРОЄКТ</span></h2>
                <p class="about__subtitle">
                    NaGrani — це освітній проєкт, створений професіоналами з безпеки та виживання. Наша місія полягає в тому, щоб ділитися знаннями та
                    навичками, які можуть врятувати життя.
                </p>
            </div>

            <div class="about__grid">
                <div class="about__image-container">
                    <div class="about__image-wrapper">
                        <NuxtImg
                            src="/images/about-instructors.webp"
                            alt="Survival team training"
                            class="about__image"
                            width="700"
                            height="500"
                            format="webp"
                            quality="80" />
                        <div class="about__image-overlay"></div>
                    </div>

                    <div class="about__card">
                        <h3 class="about__card-title">НАВЧАННЯ З ПРОФЕСІОНАЛАМИ</h3>
                        <p class="about__card-text">
                            Наші інструктори — це колишні військові, рятувальники та експерти з виживання з реальним досвідом роботи в екстремальних умовах.
                        </p>
                    </div>
                </div>

                <div class="about__content">
                    <h3 class="about__content-title">НАША ІСТОРІЯ</h3>
                    <div class="about__timeline">
                        <div
                            v-for="(item, index) in timelineItems"
                            :key="index"
                            class="about__timeline-item"
                            data-aos="fade-left">
                            <div class="about__timeline-dot"></div>
                            <div class="about__timeline-content">
                                <span class="about__timeline-year">{{ item.year }}</span>
                                <h4 class="about__timeline-title">{{ item.title }}</h4>
                                <p class="about__timeline-description">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </section>
</template>

<script setup lang="ts">
const timelineItems = [
    {
        year: "2018",
        title: "Заснування проєкту",
        description: "Початок курсів з особистої безпеки та виживання. Формування команди професіоналів з різних сфер безпеки."
    },
    {
        year: "2019-2020",
        title: "Розширення тематики",
        description: "Міське виживання, екстремальні ситуації, природа. Створення методології навчання та тренувальних полігонів."
    },
    {
        year: "2021",
        title: "Створення комплексних програм",
        description: "Практичні завдання для учасників. Розробка спеціалізованих тренінгів для різних категорій учасників."
    },
    {
        year: "2022",
        title: "Нові напрямки",
        description: "Тактична медицина, мінна безпека, вогнева підготовка. Адаптація програм до реалій воєнного часу."
    },
    {
        year: "2023+",
        title: "Підготовка до викликів",
        description: "Підготовка до будь-яких викликів сучасного світу. Розширення онлайн-курсів та міжнародне співробітництво."
    }
];
</script>

<style scoped lang="scss">
.about {
    padding: 48px 0;
    background-color: #0a0a0a;
    background-image: url("/images/logo-big.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-attachment: fixed;
    background-blend-mode: overlay;

    &__header {
        text-align: center;
        margin-bottom: 64px;
    }

    &__badge {
        display: inline-block;
        background-color: rgba($accent, 0.2);
        padding: 4px 16px;
        border-radius: 50px;
        margin-bottom: 16px;

        span {
            font-size: 14px;
            font-weight: 500;
            color: $accent;
        }
    }

    &__title {
        font-size: 32px;
        font-family: "Russo One", sans-serif;
        color: white;
        margin-bottom: 24px;

        @media (min-width: 768px) {
            font-size: 36px;
        }

        &-accent {
            color: $accent;
        }
    }

    &__subtitle {
        color: #d1d1d1;
        max-width: 768px;
        margin: 0 auto;
    }

    &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 48px;

        @media (min-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
            align-items: start;
        }
    }

    &__image-container {
        position: relative;
    }

    &__image-wrapper {
        position: sticky;
        overflow: hidden;
        clip-path: polygon(5% 0px, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%);
        height: 100%;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    &__image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(#0a0a0a, 0.7), transparent);
    }

    &__card {
        position: absolute;
        bottom: 32px;
        left: 32px;
        right: 32px;
        background-color: rgba(#0a0a0a, 0.8);
        backdrop-filter: blur(4px);
        padding: 24px;
        clip-path: polygon(5% 0px, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%);

        @media screen and (max-width: 767px) {
            padding: 16px;
        }
    }

    &__card-title {
        font-size: 20px;
        color: $white;
        margin-bottom: 8px;

        @media screen and (max-width: 767px) {
            font-size: 16px;
        }
    }

    &__card-text {
        color: #d1d1d1;

        @media screen and (max-width: 767px) {
            font-size: 14px;
        }
    }

    &__content {
        padding: 16px 0;
    }

    &__content-title {
        font-family: "Russo One", sans-serif;
        font-size: 24px;
        color: white;
        margin-bottom: 32px;
    }

    &__timeline {
        position: relative;
        padding-left: 24px;
        overflow-x: hidden;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 8px;
            bottom: 32px;
            width: 3px;
            background-color: $accent;
        }
    }

    &__timeline-item {
        position: relative;
        padding-bottom: 32px;
        transition: transform 0.3s;

        &:hover {
            transform: translateX(8px);
        }
    }

    &__timeline-dot {
        position: absolute;
        left: -30px;
        top: 12px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #D36F0D;
    }

    &__timeline-content {
        padding-left: 20px;
    }

    &__timeline-year {
        display: inline-block;
        background-color: #1a1a1a;
        padding: 4px 12px;
        border-radius: 4px;
        font-family: "Russo One", sans-serif;
        color: $accent;
        margin-bottom: 8px;
    }

    &__timeline-title {
        font-family: "Russo One", sans-serif;
        font-size: 20px;
        color: white;
        margin-bottom: 8px;
    }

    &__timeline-description {
        color: #d1d1d1;
        margin-bottom: 16px;
    }
}
</style>
