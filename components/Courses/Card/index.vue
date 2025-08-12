<template>
    <div
        :key="index"
        v-if="course.status === 'published'"
        class="course-card"
        :class="{ 'course-card--active': hoveredCard === index }"
        @mouseenter="hoveredCard = index"
        @mouseleave="hoveredCard = null">
        <div class="course-card__image-container">
            <NuxtImg
                :src="getDirectusImageUrl(course.image)"
                :alt="course.title"
                width="400"
                height="250"
                format="webp"
                quality="80"
                class="course-card__image" />
        </div>

        <div class="course-card__content">
            <h3 class="course-card__title">{{ course.title }}</h3>
            <p class="course-card__description">{{ course.short_description }}</p>
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
            <div class="course-card__price-block">
                <div class="course-card__price">
                    <span v-if="course.old_price" class="course-card__old-price">{{ formatPrice(course.old_price) }} грн</span>
                    <span class="course-card__current-price">{{ formatPrice(course.price) }} грн</span>
                </div>
                <div v-if="course.old_price" class="course-card__discount">
                    <span>-{{ calculateDiscount(course.price, course.old_price) }}%</span>
                </div>
            </div>

            <OthersPrimaryButton @click="navigateToCourse(course.slug)">
                ДЕТАЛЬНІШЕ
                <Icon
                    name="lucide:chevron-right"
                    size="16"
                    class="course-card__button-icon" />
            </OthersPrimaryButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Course } from "~/types/course.types";

defineProps<{
    course: Course;
    index: number;
}>();

const navigateToCourse = (slug: string) => {
    useRouter().push(`/course/${slug}`);
};

const hoveredCard = ref<number | null>(null);

const calculateDiscount = computed(() => {
    return (currentPrice: number | string, oldPrice: number | string): number => {
        const current = Number(currentPrice);
        const old = Number(oldPrice);
                
        if (current >= old || old === 0) return 0;

        
        return Math.round(((old - current) / old) * 100);
    };
});
</script>

<style scoped lang="scss">
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

    &__price-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        background-color: rgba($accent, 0.05);
        padding: 10px 16px;
        border-radius: 6px;
        border-left: 3px solid $accent;
    }

    &__price {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }

    &__current-price {
        font-size: 20px;
        font-weight: 700;
        color: white;
        font-family: "Russo One", sans-serif;
    }

    &__old-price {
        font-size: 16px;
        color: #a0a0a0;
        text-decoration: line-through;
        position: relative;
        
        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            height: 1px;
            background-color: rgba(red, 0.7);
        }
    }

    &__discount {
        background-color: rgba($accent, 0.2);
        color: $accent;
        font-weight: 700;
        font-size: 14px;
        padding: 4px 10px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        span {
            display: inline-flex;
            align-items: center;
        }
        
        &::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: $accent;
            margin-right: 4px;
            border-radius: 50%;
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
