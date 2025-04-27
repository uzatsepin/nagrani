<template>
    <section
        id="courses"
        class="courses">
        <NuxtLayout name="container">
            <div class="courses__header" data-aos="fade-up">
                <OthersBadge>
                    Освітні програми
                </OthersBadge>
                <h2 class="courses__title">НАШІ <span class="courses__title-accent">КУРСИ</span></h2>
                <p class="courses__subtitle">
                    <span class="courses__title-accent">Перемога любить підготовку</span>
                </p>
            </div>

            <div class="courses__grid">
                <div
                    v-for="(course, index) in courses"
                    :key="index"
                    class="course-card"
                    :class="{ 'course-card--active': hoveredCard === index }"
                    @mouseenter="hoveredCard = index"
                    @mouseleave="hoveredCard = null"
					>
                    <div class="course-card__image-container">
                        <NuxtImg
                            :src="course.image"
                            :alt="course.title"
                            width="400"
                            height="250"
                            format="webp"
                            quality="80"
                            class="course-card__image" />
                    </div>

                    <div class="course-card__content">
                        <h3 class="course-card__title">{{ course.title }}</h3>
                        <p class="course-card__description">{{ course.description }}</p>

                        <div class="course-card__stats">
                            <div class="course-card__stat">
                                <Icon
                                    name="lucide:clock"
                                    size="16"
                                    class="course-card__stat-icon" />
                                <span>{{ course.duration }}</span>
                            </div>
                            <div class="course-card__stat">
                                <Icon
                                    name="lucide:users"
                                    size="16"
                                    class="course-card__stat-icon" />
                                <span>{{ course.students }}</span>
                            </div>
                            <div class="course-card__stat course-card__stat--rating">
                                <Icon
                                    name="lucide:star"
                                    size="16"
                                    class="course-card__stat-icon" />
                                <span>{{ course.rating }}</span>
                            </div>
                        </div>

                        <OthersPrimaryButton>
                            ДЕТАЛЬНІШЕ
                            <Icon
                                name="lucide:chevron-right"
                                size="16"
                                class="course-card__button-icon" />
                        </OthersPrimaryButton>
                    </div>
                </div>
            </div>

            <!-- <div class="courses__footer">
        <button class="btn-polygon btn-polygon--outline">
          ПОКАЗАТИ ВСІ КУРСИ
        </button>
      </div> -->
        </NuxtLayout>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hoveredCard = ref<number | null>(null);

const courses = [
    {
        title: "БАЗОВИЙ КУРС ВИЖИВАННЯ",
        description: "Комплексна програма з основних навичок виживання у різних умовах",
        image: "/images/course.webp",
        duration: "3 дні",
        students: "250+",
        rating: "4.8"
    },
    {
        title: "ТАКТИЧНА МЕДИЦИНА",
        description: "Навички з надання першої допомоги в умовах бойових дій",
        image: "/images/course.webp",
        duration: "3 дні",
        students: "180+",
        rating: "4.9"
    },
    {
        title: "Практичний офлайн курс 'ЛІНІЯ ЖИТТЯ'",
        description: "Підготовка до надзвичайних ситуацій у міському середовищі, життєво важливі алгоритми дій в результаті: обстрілів, пожежі, ДТП, коли потрапив під завали...",
        image: "/images/course.webp",
        duration: "5 тижнів",
        students: "200+",
        rating: "4.7"
    },
    {
        title: "ПІДГОТОВКА ДО МОБІЛІЗАЦІЇ",
        description: "Цей курс – це не про примус чи страх, а про вашу готовність до реальності. Навіть, якщо ви не бажаєте брати участь у бойових діях, підготовка дозволить вам краще зрозуміти свої можливості, захистити себе та близьких і зберегти контроль над власним життям у складних обставинах.",
        image: "/images/course.webp",
        duration: "1 тиждень",
        students: "150+",
        rating: "4.6"
    }
];
</script>

<style lang="scss" scoped>
.courses {
    padding: 48px 0;

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
        margin: 0 auto 24px;
        font-size: 24px;
    }

    &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 992px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    &__footer {
        margin-top: 48px;
        text-align: center;
    }
}

.course-card {
    background-color: #1a1a1a;
    overflow: hidden;
    transition: all 0.3s ease;
	clip-path: polygon(5% 0px, 100% 0, 100% 95%, 95% 100%, 0 100%, 0% 5%);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba($accent, 0.1);
    }

    &__image-container {
        height: 200px;
        overflow: hidden;
        clip-path: polygon(5% 0px, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%);
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;

        .course-card:hover & {
            transform: scale(1.1);
        }
    }

    &__content {
        padding: 24px;

		.primary-button {
			margin: 0 auto;
			display: flex;
		}
    }

    &__title {
        font-family: "Russo One", sans-serif;
        font-size: 18px;
        color: white;
        margin-bottom: 12px;
		height: 45px;
    }

    &__description {
        color: #d1d1d1;
        margin-bottom: 24px;
        height: 130px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        line-height: 19px;
    }

    &__stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        font-size: 14px;
    }

    &__stat {
        display: flex;
        align-items: center;
        color: #a0a0a0;

        &-icon {
            margin-right: 4px;
        }

        &--rating {
            color: $accent;
        }
    }

    &__button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &-icon {
            margin-left: 8px;
            transition: transform 0.3s ease;

            .course-card:hover & {
                transform: translateX(4px);
            }
        }
    }
}
</style>
