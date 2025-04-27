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
                        <div class="founder__image-glow"></div>
                        <img
                            src="/images/founder.webp"
                            alt="Founder portrait"
                            class="founder__image" />
                        <div class="founder__image-frame"></div>
                    </div>

                    <div class="founder__name-badge">
                        <p class="founder__name">Віталій Олійник <span class="founder__title-sub-accent">"Будда"</span></p>
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
        title: "5+",
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
    padding: 60px 0;
    background-color: #0a0a0a;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 30% 50%, rgba(211, 111, 13, 0.05) 0%, transparent 60%);
        pointer-events: none;
    }

    &__header {
        text-align: center;
        margin-bottom: 70px;
    }

    &__badge {
        display: inline-block;
        background-color: rgba($accent, 0.2);
        padding: 6px 18px;
        border-radius: 50px;
        margin-bottom: 18px;
        box-shadow: 0 0 15px rgba($accent, 0.2);

        span {
            font-size: 15px;
            font-weight: 600;
            color: $accent;
            letter-spacing: 0.5px;
        }
    }

    &__title {
        font-size: 32px;
        color: white;
        margin-bottom: 24px;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        letter-spacing: 1px;

        @media (min-width: 768px) {
            font-size: 38px;
        }

        &-accent {
            color: $accent;
            position: relative;
            
            &::after {
                content: '';
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: $accent;
                opacity: 0.6;
            }
        }

        &-sub-accent {
            color: $accent;
            font-size: 18px;
            font-weight: 600;
            text-transform: uppercase;
        }
    }

    &__content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 50px;
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
		height: 600px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
		
		@media (max-width: 768px) {
			height: 450px;
		}
	}
    
    &__image-frame {
        position: absolute;
        inset: 0;
        border: 3px solid rgba(211, 111, 13, 0.3);
        z-index: 2;
        pointer-events: none;

        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            border-style: solid;
            border-color: $accent;
        }

        &::before {
            top: -3px;
            left: -3px;
            border-width: 3px 0 0 3px;
        }

        &::after {
            bottom: -3px;
            right: -3px;
            border-width: 0 3px 3px 0;
        }
    }
    
    &__image-glow {
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
        background: radial-gradient(circle at 50% 50%, rgba(211, 111, 13, 0.5) 0%, transparent 50%);
        z-index: 1;
        transform: scale(0.8);
        animation: glowPulse 8s infinite alternate ease-in-out;
        mix-blend-mode: overlay;
        pointer-events: none;
    }

    &__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top !important;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
        transition: transform 0.5s ease-in-out;
        
        &:hover {
            transform: scale(1.03);
        }
	}

    &__name-badge {
        position: absolute;
        bottom: 24px;
        right: 24px;
        background-color: rgba(26, 26, 26, 0.9);
        backdrop-filter: blur(5px);
        padding: 18px;
        clip-path: polygon(5% 0px, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        border-left: 3px solid rgba($accent, 0.6);
        z-index: 3;

        @media screen and (max-width: 768px) {
            border-left: 3px solid rgba($accent, 1);
        }
    }

    &__name {
        color: white;
        font-size: 20px;
        margin-bottom: 6px;
        letter-spacing: 0.5px;
    }

    &__position {
        color: $accent;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 600;
    }

    &__bio {
        padding: 20px 0;
    }

    &__section-title {
        font-size: 26px;
        color: white;
        margin-bottom: 28px;
        position: relative;
        display: inline-block;
        
        &::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 60%;
            height: 3px;
            background: linear-gradient(to right, $accent, transparent);
        }
    }

    &__paragraph {
        color: #d1d1d1;
        margin-bottom: 18px;
        line-height: 1.7;
        font-size: 16px;
    }

    &__quote {
        color: #e6e6e6;
        margin: 28px 0;
        line-height: 1.7;
        font-style: italic;
        border-left: 3px solid $accent;
        padding: 12px 0 12px 20px;
        background-color: rgba(211, 111, 13, 0.05);
        border-radius: 0 8px 8px 0;
        position: relative;
    }

    &__achievements {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        margin: 36px 0;

		@media screen and (max-width: 767px) {
			grid-template-columns: 1fr;
		}
    }

    &__achievement {
        background-color: rgba(26, 26, 26, 0.6);
        padding: 20px;
        border-radius: 8px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.05);
        position: relative;
        overflow: hidden;
        
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background-color: $accent;
            opacity: 0.6;
        }
        
        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
    }

    &__achievement-header {
        display: flex;
        align-items: center;
        margin-bottom: 14px;
    }

    &__achievement-icon {
        color: $accent;
        margin-right: 14px;
        background-color: rgba($accent, 1);
        padding: 8px;
        border-radius: 50%;
    }

    &__achievement-title {
        color: white;
        font-size: 18px;
    }

    &__achievement-description {
        color: #b0b0b0;
        font-size: 15px;
    }
}

@keyframes glowPulse {
    0% {
        opacity: 0.4;
        transform: scale(0.8) rotate(0deg);
    }
    50% {
        opacity: 0.6;
        transform: scale(1) rotate(5deg);
    }
    100% {
        opacity: 0.4;
        transform: scale(0.8) rotate(0deg);
    }
}
</style>