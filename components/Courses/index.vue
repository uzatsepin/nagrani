<template>
    <section
        id="courses"
        class="courses">
        <NuxtLayout name="container">
            <!-- Заголовок -->
            <div
                class="courses__header"
                data-aos="fade-up">
                <OthersBadge>Освітні програми</OthersBadge>
                <h2 class="courses__title">НАШІ <span class="courses__title-accent">КУРСИ</span></h2>
                <p class="courses__subtitle">
                    <span class="courses__title-accent">Перемога любить підготовку</span>
                </p>
            </div>

            <!-- Состояние загрузки -->
            <div
                v-if="status === 'pending'"
                class="courses__loading">
                <div class="courses__loader">
                    <Icon
                        name="lucide:loader"
                        size="40"
                        class="courses__loader-icon" />
                    <p>Завантаження курсів...</p>
                </div>
            </div>

            <!-- Состояние ошибки -->
            <div
                v-else-if="error"
                class="courses__error">
                <div class="courses__error-content">
                    <Icon
                        name="lucide:alert-triangle"
                        size="40"
                        class="courses__error-icon" />
                    <h3>Не вдалося завантажити курси</h3>
                    <p>{{ error.message }}</p>
                    <button
                        class="courses__error-button"
                        @click="refresh()">
                        <Icon
                            name="lucide:refresh-cw"
                            size="16"
                            class="courses__error-button-icon" />
                        Спробувати знову
                    </button>
                </div>
            </div>

            <!-- Отображение курсов -->
            <div
                v-else
                class="courses__grid">
                <CoursesCard v-for="(course, index) in courses" :course="course" :index="index"/>
            </div>
        </NuxtLayout>
    </section>
</template>

<script setup lang="ts">
import { useCoursesStore } from "~/stores/courses";
const coursesStore = useCoursesStore();

const { courses } = storeToRefs(coursesStore);

const { data, status, error, refresh } = await useAsyncData("courses", async () => {
    await coursesStore.fetchCourses();
    return coursesStore.courses;
});
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

    &__loading,
    &__error {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 400px;
        width: 100%;
    }

    &__loader {
        text-align: center;

        &-icon {
            color: $accent;
            animation: spin 1.5s linear infinite;
            margin-bottom: 16px;
        }

        p {
            color: #d1d1d1;
            font-size: 16px;
        }
    }

    &__error {
        &-content {
            text-align: center;
            max-width: 400px;
            padding: 32px;
            background-color: rgba(#1a1a1a, 0.8);
            border-radius: 8px;
            border: 1px solid rgba(red, 0.3);
        }

        &-icon {
            color: #f44336;
            margin-bottom: 16px;
        }

        h3 {
            color: white;
            font-size: 20px;
            margin-bottom: 8px;
        }

        p {
            color: #d1d1d1;
            margin-bottom: 24px;
        }

        &-button {
            display: inline-flex;
            align-items: center;
            padding: 10px 24px;
            background-color: rgba($accent, 0.2);
            color: $accent;
            border: 1px solid $accent;
            border-radius: 4px;
            font-weight: 500;
            transition: all 0.3s ease;

            &:hover {
                background-color: rgba($accent, 0.3);
            }

            &-icon {
                margin-right: 8px;
            }
        }
    }

    &__footer {
        margin-top: 48px;
        text-align: center;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
