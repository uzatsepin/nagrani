<template>
    <section class="founder">
        <NuxtLayout name="container">
            <div class="founder__header" data-aos="fade-up">
                <OthersBadge>Наша команда</OthersBadge>
                <h2 class="founder__title">ЗАСНОВНИК ТА <span class="founder__title-accent">КЕРІВНИК</span> ПРОЄКТУ</h2>
            </div>

            <div class="founder__content">
                <div class="founder__image-container" data-aos="fade-right">
                    <div class="founder__image-wrapper">
                        <img
                            src="/images/founder.webp"
                            alt="Founder portrait"
                            class="founder__image" />
                    </div>

                    <div class="founder__name-badge">
                        <p class="founder__name">Віталій Олійник</p>
                        <p class="founder__position">ЗАСНОВНИК ТА ГОЛОВНИЙ ІНСТРУКТОР</p>
                    </div>
                </div>

                <div class="founder__bio" data-aos="fade-left">
                    <h3 class="founder__section-title">ПРО ЗАСНОВНИКА</h3>
                    <p class="founder__paragraph">
                        Віталій Олійник — професійний інструктор з виживання з багаторічним досвідом роботи у сфері безпеки. Колишній військовий, рятувальник та
                        експерт з кризових ситуацій, який присвятив своє життя навчанню людей навичкам, які рятують життя.
                    </p>
                    <p class="founder__quote">
                        "Моя мета — зробити знання про виживання доступними для кожного. Я вірю, що кожна людина має право і повинна вміти захистити себе та
                        своїх близьких у будь-якій ситуації."
                    </p>

                    <div class="founder__achievements">
                        <div
                            v-for="(achievement, index) in achievements"
                            :key="index"
                            class="founder__achievement">
                            <div class="founder__achievement-header">
                                <Icon
                                    :name="achievement.iconName"
                                    size="24"
                                    class="founder__achievement-icon" />
                                <h4 class="founder__achievement-title">{{ achievement.title }}</h4>
                            </div>
                            <p class="founder__achievement-description">{{ achievement.description }}</p>
                        </div>
                    </div>

                    <!-- <p class="founder__paragraph">
                        Під керівництвом Олександра команда професіоналів розробляє та вдосконалює програми навчання, які відповідають сучасним викликам і
                        загрозам. Кожна програма базується на реальному досвіді та практичних знаннях.
                    </p> -->
                </div>
            </div>
        </NuxtLayout>
    </section>
</template>

<script lang="ts" setup>
const achievements = [
    {
        iconName: "lucide:award",
        title: "10+ років",
        description: "Досвіду в сфері виживання"
    },
    {
        iconName: "lucide:users",
        title: "2000+",
        description: "Підготовлених учнів"
    },
    {
        iconName: "lucide:book",
        title: "15+",
        description: "Авторських програм"
    },
    {
        iconName: "lucide:calendar",
        title: "100+",
        description: "Проведених заходів"
    }
];
</script>

<style lang="scss" scoped>
.founder {
    padding: 48px 0;
    background-color: #0a0a0a;

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

    &__content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
		overflow-x: hidden;

        @media (min-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
        }
    }

    &__image-container {
        position: relative;
    }

    &__image-wrapper {
		position: relative;
		overflow: hidden;
		clip-path: polygon(5% 0px, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%);
		height: 600px; /* или другое значение, которое вам подходит */
		
		@media (max-width: 768px) {
			height: 400px; /* меньшая высота для мобильных устройств */
		}
	}

    &__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top !important; /* Добавлен !important для перезаписи встроенных стилей */
		display: block;
		position: absolute;
		top: 0;
		left: 0;
	}

    &__name-badge {
        position: absolute;
        bottom: 24px;
        right: 24px;
        background-color: #1a1a1a;
        padding: 16px;
        clip-path: polygon(5% 0px, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%);
    }

    &__name {
        font-family: "Russo One", sans-serif;
        color: white;
        font-size: 18px;
        margin-bottom: 4px;
    }

    &__position {
        color: $accent;
        font-size: 14px;
    }

    &__bio {
        padding: 16px 0;
    }

    &__section-title {
        font-family: "Russo One", sans-serif;
        font-size: 24px;
        color: white;
        margin-bottom: 24px;
    }

    &__paragraph {
        color: #d1d1d1;
        margin-bottom: 16px;
        line-height: 1.6;
    }

    &__quote {
        color: #d1d1d1;
        margin-bottom: 24px;
        line-height: 1.6;
        font-style: italic;
        border-left: 3px solid $accent;
        padding-left: 16px;
    }

    &__achievements {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        margin: 32px 0;

		@media screen and (max-width: 767px) {
			grid-template-columns: 1fr;
		}
    }

    &__achievement {
        background-color: #1a1a1a;
        padding: 16px;
        border-radius: 8px;
    }

    &__achievement-header {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
    }

    &__achievement-icon {
        color: $accent;
        margin-right: 12px;
    }

    &__achievement-title {
        font-family: "Russo One", sans-serif;
        color: white;
    }

    &__achievement-description {
        color: #a0a0a0;
        font-size: 14px;
    }
}
</style>
