<template>
    <section
        id="directions"
        class="directions">
        <NuxtLayout name="container">
            <div
                class="directions__header"
                data-aos="fade-up">
                <OthersBadge> Освітні напрямки </OthersBadge>
                <h2 class="directions__title">НАШІ <span class="directions__title-accent">НАПРЯМКИ</span></h2>
                <p class="directions__subtitle">
                    NaGrani охоплює широкий спектр напрямків. Кожен з них розроблений для формування конкретних практичних навичок та алгоритмів, адаптованих
                    під різні умови.
                </p>
            </div>

            <div class="tabs">
                <div class="tabs__list">
                    <button
                        v-for="direction in directions"
                        :key="direction.id"
                        class="tabs__tab"
                        :class="{ 'tabs__tab--active': activeTab === direction.id }"
                        @click="handleTabChange(direction.id)">
                        <Icon
                            :name="direction.iconName"
                            size="20"
                            class="tabs__icon" />
                        <span class="tabs__label">{{ direction.tabLabel }}</span>
                    </button>
                </div>

                <div class="tabs__content">
                    <Transition
                        name="fade"
                        mode="out-in">
                        <div
                            :key="activeTab"
                            class="tab-panel">
                            <div class="tab-panel__grid">
                                <div class="tab-panel__image-container">
                                    <div class="tab-panel__image-wrapper">
                                        <NuxtImg
                                            :src="activeDirection.image"
                                            :alt="activeDirection.title"
                                            class="tab-panel__image"
                                            width="800"
                                            height="500"
                                            format="webp"
                                            quality="80" />
                                        <div class="tab-panel__image-overlay"></div>
                                        <div class="tab-panel__image-content">
                                            <h3 class="tab-panel__title">{{ activeDirection.title }}</h3>
                                            <p class="tab-panel__description">{{ activeDirection.description }}</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="tab-panel__info-panel">
                                    <h4 class="tab-panel__section-title">Ключові навички</h4>
                                    <div class="tab-panel__benefits">
                                        <div
                                            v-for="(benefit, i) in activeDirection.benefits"
                                            :key="i"
                                            class="benefit-item">
                                            <Icon
                                                name="lucide:chevron-right"
                                                size="16"
                                                class="benefit-item__icon" />
                                            <p class="benefit-item__text">{{ benefit }}</p>
                                        </div>
                                    </div>

                                    <div class="tab-panel__divider"></div>

                                    <h4 class="tab-panel__section-title">Інформація про напрямок</h4>
                                    <div class="tab-panel__key-points">
                                        <div
                                            v-for="(point, i) in activeDirection.keyPoints"
                                            :key="i"
                                            class="key-point">
                                            <span class="key-point__label">{{ point.title }}:</span>
                                            <span class="key-point__value">{{ point.value }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>

            <div class="directions__footer">
                <OthersPrimaryButton class="btn-polygon">ПЕРЕГЛЯНУТИ ВСІ НАПРЯМКИ</OthersPrimaryButton>
            </div>
        </NuxtLayout>
    </section>
</template>

<script setup lang="ts">

const directions = [
    {
        id: "survival",
        title: "Базові навички виживання",
        tabLabel: "Виживання",
        iconName: "lucide:compass",
        description: "Основи самозахисту, пошук води та їжі, орієнтування на місцевості, базове розпалювання вогню, створення укриття у дикій природі.",
        image: "/images/directions/survive.webp",
        benefits: [
            "Навички орієнтування без технічних засобів",
            "Знаходження та очищення води у дикій природі",
            "Створення укриття з підручних матеріалів",
            "Розпалювання вогню в будь-яких умовах",
            "Безпека і захист від диких звірів",
            "Виживання в умовах бойових дій",
            "Маскування від ворожого виявлення."
        ],
        keyPoints: [
            { title: "Практичні заняття", value: "70%" },
            { title: "Рівень складності", value: "Початковий-Середній" },
            { title: "Тривалість навчання", value: "3-5 днів" }
        ]
    },
    {
        id: "medical",
        title: "Тактична медицина",
        tabLabel: "Медицина",
        iconName: "lucide:heart",
        description: "Надання першої домедичної допомоги, зупинка кровотечі, накладання турнікету, евакуація постраждалих, тактична допомога в бойових умовах.",
        image: "/images/directions/medicine.webp",
        benefits: [
            "Надання першої допомоги пораненим за алгоритмом MARCH та тактика дій в бойових умовах",
            "Зупинка критичної кровотечі різними методами",
            "Забезпечення прохідності дихальних шляхів",
            "Евакуація пораненого з небезпечної зони",
            "Сортування постраждалих при масових ураженнях",
            "Перша допомога при утопленні, ДТП, епілепсії та різних невідкладних станах організму людини"
        ],
        keyPoints: [
            { title: "Практичні заняття", value: "80%" },
            { title: "Рівень складності", value: "Початковий-Середній" },
            { title: "Тривалість навчання", value: "1-3 дні" }
        ]
    },
    {
        id: "urban",
        title: "Міське виживання",
        tabLabel: "Місто",
        iconName: "lucide:building",
        description:
            "Підготовка до надзвичайних ситуацій у місті, створення тривожної валізи, безпечна навігація в міських умовах, виживання під час відключення комунікацій.",
        image: "/images/directions/town.avif",
        benefits: [
            "Створення запасів та тривожної валізи",
            "Поведінка під час надзвичайних ситуацій у місті",
            "Виживання без електрики, води та газу",
            "Безпечна евакуація з міста",
            "Імпровізоване використання міських ресурсів"
        ],
        keyPoints: [
            { title: "Практичні заняття", value: "65%" },
            { title: "Рівень складності", value: "Початковий-Середній" },
            { title: "Тривалість навчання", value: "3-7 днів" }
        ]
    },
    {
        id: "mine",
        title: "Мінна безпека",
        tabLabel: "Безпека",
        iconName: "lucide:alert-triangle",
        description:
            "Розпізнавання вибухонебезпечних предметів, дії при виявленні міни або нерозірваного боєприпасу, безпечна поведінка на небезпечних територіях.",
        image: "/images/directions/safety.avif",
        benefits: [
            "Ідентифікація різних типів мін та вибухових пристроїв",
            "Розпізнавання мінних полів та небезпечних зон",
            "Протокол дій при виявленні вибухонебезпечних предметів",
            "Пересування на потенційно небезпечній території",
            "Взаємодія з саперами та рятувальними службами"
        ],
        keyPoints: [
            { title: "Практичні заняття", value: "50%" },
            { title: "Рівень складності", value: "Середній-Високий" },
            { title: "Тривалість навчання", value: "1-2 тижні" }
        ]
    },
    {
        id: "firearms",
        title: "Вогнева підготовка",
        tabLabel: "Зброя",
        iconName: "lucide:target",
        description: "Безпечне поводження зі зброєю, основи стрільби, тактика застосування, самозахист, законодавча база.",
        image: "/images/directions/weapon.webp",
        benefits: [
            "Правила безпечного поводження зі зброєю",
            "Тактичні прийоми стрільби з різних положень",
            "Швидке перезаряджання та усунення затримок",
            "Стрільба в умовах обмеженої видимості",
            "Законодавчі аспекти застосування зброї для самооборони"
        ],
        keyPoints: [
            { title: "Практичні заняття", value: "75%" },
            { title: "Рівень складності", value: "Середній-Високий" },
            { title: "Тривалість навчання", value: "1 тиждень" }
        ]
    },
    {
        id: "campaigns",
        title: "Походи",
        tabLabel: "Походи",
        iconName: "material-symbols:camping-outline",
        description:
            "Освойте всі необхідні навички для безпечних походів: планування маршруту, орієнтація на місцевості, облаштування табору та виживання в екстремальних умовах.",
        image: '/images/directions/campains.webp',
        benefits: [
            "Планування та оцінка складності маршруту",
            "Навігація з мапою й компасом у будь-яку погоду",
            "Облаштування табору та розпалювання вогнища",
            "Пошук і очищення джерел води",
            "Домедична допомога в польових умовах"
        ],
        keyPoints: [
            { title: "Практичні заняття", value: "70%" },
            { title: "Рівень складності", value: "Середній" },
            { title: "Тривалість навчання", value: "5–7 днів" }
        ]
    }
];

const activeTab = ref("survival");

// Вычисляемое свойство для получения активного направления
const activeDirection = computed(() => {
    return directions.find((dir) => dir.id === activeTab.value) || directions[0];
});

const handleTabChange = (value: string) => {
    activeTab.value = value;
};
</script>

<style lang="scss" scoped>
.directions {
    padding: 48px 0;
    position: relative;
    overflow: hidden;

    &__header {
        position: relative;
        z-index: 1;
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

    &__footer {
        position: relative;
        z-index: 1;
        margin-top: 64px;
        text-align: center;
    }
}

.tabs {
    position: relative;
    z-index: 1;
    margin-bottom: 48px;

    &__list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 4px;
        border-radius: 8px;

        @media (min-width: 768px) {
            grid-template-columns: repeat(6, 1fr);
        }
    }

    &__tab {
        padding: 12px 20px;
        border: 1px solid rgba($accent, 0.3);
        background: transparent;
        color: #d1d1d1;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;

        &:hover {
            border-color: $accent;
            color: white;
            background: rgba($accent, 0.1);
        }

        &--active {
            background: $accent;
            border-color: $accent;
            color: white;
        }
    }

    &__icon {
        color: $accent;

        .tabs__tab--active & {
            color: white;
        }
    }

    &__label {
        display: inline;
    }

    &__content {
        margin-top: 32px;
    }
}

.tab-panel {
    &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;

        @media (min-width: 992px) {
            grid-template-columns: 3fr 2fr;
        }
    }

    &__image-container {
        width: 100%;
    }

    &__image-wrapper {
        position: relative;
        overflow: hidden;
        clip-path: polygon(5% 0px, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%);
        height: 250px;

        @media (min-width: 768px) {
            height: 400px;
        }
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    &__image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(#0a0a0a, 0.8), transparent);
    }

    &__image-content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 24px;
    }

    &__title {
        font-family: "Russo One", sans-serif;
        font-size: 20px;
        color: white;
        margin-bottom: 8px;

        @media (min-width: 768px) {
            font-size: 24px;
        }
    }

    &__description {
        color: #e5e5e5;
        font-size: 14px;

        @media (min-width: 768px) {
            font-size: 16px;
        }
    }

    &__info-panel {
        background-color: #1a1a1a;
        padding: 24px;
        border-radius: 8px;
    }

    &__section-title {
        font-family: "Russo One", sans-serif;
        font-size: 18px;
        color: white;
        margin-bottom: 16px;
    }

    &__benefits {
        margin-bottom: 24px;
    }

    &__divider {
        height: 1px;
        background-color: #333;
        margin: 24px 0;
    }

    &__key-points {
        display: grid;
        gap: 12px;
    }
}

.benefit-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        .benefit-item__icon {
            transform: translateX(4px);
        }
    }

    &__icon {
        color: $accent;
        margin-right: 8px;
        margin-top: 4px;
        transition: transform 0.2s;
    }

    &__text {
        color: #d1d1d1;
        font-size: 14px;
    }
}

.key-point {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__label {
        color: #9e9e9e;
        font-size: 14px;
    }

    &__value {
        color: $accent;
        font-weight: 500;
        white-space: nowrap;
    }
}
</style>
