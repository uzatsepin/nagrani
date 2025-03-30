<template>
    <section
        id="target"
        class="target">
        <div class="target__container">
            <div class="target__header">
                <span class="target__badge">
                    <span>ЦІЛЬОВА АУДИТОРІЯ</span>
                </span>
                <h2 class="target__title">ДЛЯ <span class="target__title-accent">КОГО</span> ЦЕЙ ПРОЄКТ</h2>
                <p class="target__subtitle">
                    Наші програми розроблені для різних категорій людей, незалежно від їхнього досвіду та підготовки. Кожен знайде програму, яка відповідає саме
                    його потребам.
                </p>
            </div>

            <div class="target__grid">
                <div
                    v-for="(group, index) in targetGroups"
                    :key="index"
                    class="target__card"
                    :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'">
                    <h3 class="target__card-title">{{ group.title }}</h3>
                    <p class="target__card-description">{{ group.description }}</p>

                    <div class="target__benefits">
                        <div
                            v-for="(benefit, i) in group.benefits"
                            :key="i"
                            class="target__benefit">
                            <Icon
                                name="lucide:check-circle"
                                size="18"
                                class="target__benefit-icon" />
                            <p class="target__benefit-text">{{ benefit }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="target__footer">
                <p class="target__footer-text" data-aos="fade-up">
                    Незалежно від вашого досвіду, фізичної підготовки чи віку, ми маємо програми, які допоможуть вам отримати необхідні навички для безпеки та
                    виживання.
                </p>
                <OthersPrimaryButton data-aos="fade-up">ПІДІБРАТИ ПРОГРАМУ</OthersPrimaryButton>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const targetGroups = [
    {
        title: "ЦИВІЛЬНІ ОСОБИ",
        description: "Для всіх, хто хоче бути готовим до надзвичайних ситуацій у повсякденному житті та захистити себе і своїх близьких.",
        benefits: [
            "Навички самозахисту для повсякденного життя",
            "Підготовка до природних катаклізмів",
            "Базові навички виживання для вашої впевненості",
            "Психологічна стійкість у стресових ситуаціях"
        ]
    },
    {
        title: "ЛЮБИТЕЛІ АКТИВНОГО ВІДПОЧИНКУ",
        description: "Для туристів, альпіністів та любителів природи, які хочуть навчитись виживати в дикій природі та екстремальних умовах.",
        benefits: [
            "Орієнтування на місцевості без технічних засобів",
            "Побудова укриття в природних умовах",
            "Пошук та очищення води у дикій природі",
            "Безпечне поводження з вогнем та приготування їжі"
        ]
    },
    {
        title: "ВОЇНИ ТА ПРАВООХОРОНЦІ",
        description: "Спеціальні курси для військових, поліцейських та інших силовиків, які потребують додаткових навичок для своєї роботи.",
        benefits: ["Тактична медицина на полі бою", "Виживання в умовах бойових дій", "Розширені техніки самозахисту", "Тактичне планування та дії у команді"]
    },
    {
        title: "КОРПОРАТИВНІ КОМАНДИ",
        description: "Для компаній, які прагнуть розвинути навички командної роботи, лідерства та стресостійкості своїх співробітників.",
        benefits: [
            "Командоутворення через екстремальні випробування",
            "Розвиток лідерських якостей",
            "Управління стресом та прийняття рішень під тиском",
            "Корпоративна безпека та антикризове управління"
        ]
    }
];
</script>

<style lang="scss" scoped>
.target {
    padding: 48px 0;
    background-color: #0a0a0a;

    &__container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

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
        gap: 32px;
        overflow-x: hidden;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__card {
        background-color: #1a1a1a;
        padding: 32px;
        border-radius: 8px;
        border-left: 4px solid $accent;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba($accent, 0.1);
        }
    }

    &__card-title {
        font-family: "Russo One", sans-serif;
        font-size: 20px;
        color: white;
        margin-bottom: 16px;
    }

    &__card-description {
        color: #d1d1d1;
        margin-bottom: 24px;
    }

    &__benefits {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    &__benefit {
        display: flex;
        align-items: flex-start;
    }

    &__benefit-icon {
        color: $accent;
        margin-right: 12px;
        margin-top: 4px;
        flex-shrink: 0;
    }

    &__benefit-text {
        color: #d1d1d1;
    }

    &__footer {
        margin-top: 64px;
        text-align: center;
    }

    &__footer-text {
        color: #d1d1d1;
        max-width: 672px;
        margin: 0 auto 32px;
    }
}
</style>
