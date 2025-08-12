<template>
    <section
        id="mission"
        class="mission">
        <div class="mission__background">
            <div class="mission__bg-circle mission__bg-circle--1"></div>
            <div class="mission__bg-circle mission__bg-circle--2"></div>
        </div>

        <NuxtLayout name="container">
            <div
                class="mission__content"
                data-aos="fade-up">
                <div class="mission__header">
                    <OthersBadge>Наша філософія</OthersBadge>
                    <h2 class="mission__title">"ГОЛОВНЕ НЕ УЧАСТЬ А <span class="mission__title-accent">ПЕРЕМОГА</span>"</h2>
                    <p class="mission__subtitle">
                        Ми працюємо, щоб дати людям знання та навички, які рятують життя. Наша місія — зробити світ безпечнішим через освіту та практичну
                        підготовку.
                    </p>
                </div>

                <div class="mission__grid">
                    <div
                        class="mission__text-content"
                        data-aos="fade-right">
                        <h3 class="mission__section-title">НАША ГОЛОВНА ЗАДАЧА ТА МІСІЯ</h3>
                        <p class="mission__paragraph">
                            Наша місія – підвищення культури безпеки в країні та формування сильного й підготовленого суспільства зі стійкими навичками ефективної поведінки в різних непередбачуваних ситуаціях, щоб кожен міг прожити довге, насичене, цікаве та, найголовніше, безпечне життя.
                        </p>
                        <p class="mission__paragraph">
                            Цінність проєкту — здатність адаптуватися до швидкозмінного середовища. Ми можемо багато розповідати та демонструвати корисні знання, але найголовніший посил проєкту — заклик до дії.
                        </p>
                        <h2 class="mission__stats-title">
                            Концепція взаємодії з небезпекою
                        </h2>
                        <div class="mission__stats">
                            <div class="mission__stat-card">
                                <div class="mission__stat-number">90%</div>
                                <p class="mission__stat-title">МОЖНА ЗАПОБІГТИ</p>
                                <p class="mission__stat-description">через підготовку та знання</p>
                            </div>
                            <div class="mission__stat-card">
                                <div class="mission__stat-number">10%</div>
                                <p class="mission__stat-title">ВАЖЛИВО ДІЯТИ ПРАВИЛЬНО</p>
                                <p class="mission__stat-description">в критичних ситуаціях</p>
                            </div>
                        </div>

                        <OthersPrimaryButton>ДІЗНАТИСЯ БІЛЬШЕ ПРО НАШУ МІСІЮ</OthersPrimaryButton>
                    </div>

                    <div
                        class="mission__image-container"
                        data-aos="fade-left">
                        <div class="mission__image-wrapper">
                            <NuxtImg
                                src="/images/mission.webp"
                                alt="Місія NaGrani - навчання виживання та безпеки в екстремальних умовах"
                                class="mission__image"
                                width="700"
                                height="500"
                                format="webp"
                                quality="85"
                                loading="lazy"
                                placeholder />
                            <div class="mission__image-overlay"></div>
                        </div>

                        <div class="mission__overlay-text">
                        <Icon name="f7:quote-bubble" size="32" class="mission__overlay-icon"/>
                            <!-- <p class="mission__overlay-title"></p> -->
                            <p class="mission__overlay-description">
                                "Самий легкий день був вчора. У тебе один шлях – ставати сильнішим."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </section>
</template>

<style scoped lang="scss">
.mission {
    position: relative;
    padding: 48px 0;
    overflow: hidden;

    &__background {
        position: absolute;
        inset: 0;
        z-index: 0;
    }

    &__bg-circle {
        position: absolute;
        border-radius: 50%;

        &--1 {
            top: 25%;
            right: 33%;
            width: 24rem;
            height: 24rem;
            background-color: rgba($accent, 0.1);
            filter: blur(150px);
        }

        &--2 {
            bottom: 33%;
            left: 25%;
            width: 20rem;
            height: 20rem;
            background-color: rgba($accent, 0.05);
            filter: blur(100px);
        }
    }

    &__content {
        position: relative;
        z-index: 10;
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
        gap: 40px;

        @media (min-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
        }
    }

    &__text-content {
        .primary-button {
            margin: 0 auto;
            display: flex;
        }
    }

    &__section-title {
        font-family: "Russo One", sans-serif;
        font-size: 24px;
        color: white;
        margin-bottom: 24px;
    }

    &__paragraph {
        color: #d1d1d1;
        margin-bottom: 32px;
        line-height: 1.6;
    }

    &__stats {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        margin-bottom: 32px;
    }

    &__stats-title {
        font-family: "Russo One", sans-serif;
        font-size: 24px;
        color: white;
        margin-bottom: 16px;
        text-align: center;
    }

    &__stat-card {
        background-color: #1a1a1a;
        padding: 24px;
        border-radius: 8px;
        text-align: center;
    }

    &__stat-number {
        font-family: "Russo One", sans-serif;
        font-size: 48px;
        color: $accent;
        margin-bottom: 8px;
    }

    &__stat-title {
        font-family: "Russo One", sans-serif;
        color: white;
        margin-bottom: 8px;
    }

    &__stat-description {
        color: #a0a0a0;
        font-size: 14px;
    }

    &__image-container {
        position: relative;
    }

    &__image-wrapper {
        position: relative;
        overflow: hidden;
        clip-path: polygon(5% 0px, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%);
    }

    &__image {
        width: 100%;
        height: auto;
        object-fit: cover;
        display: block;
    }

    &__image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(#0a0a0a, 0.7), transparent);

        &::before {
            content: "";
            position: absolute;
            inset: -50px 0 0 -50px;
            width: calc(100% + 70px);
            height: calc(100% + 70px);
            background: radial-gradient(
                ellipse at 30% 30%,
                rgba($accent, 0.85) 0%,
                rgba($accent, 0.5) 25%,
                rgba($accent, 0.2) 50%,
                rgba($accent, 0.05) 75%,
                transparent 100%
            );
            filter: blur(45px);
            opacity: 0.9;
            mix-blend-mode: screen;
            pointer-events: none;
            z-index: -1;
            transform-origin: top left;
        }

        &::after {
            content: "";
            position: absolute;
            inset: -60px -20px -20px -60px;
            background: radial-gradient(ellipse at 25% 25%, rgba($accent, 0.3) 0%, rgba($accent, 0.2) 40%, rgba($accent, 0.1) 60%, transparent 100%);
            filter: blur(60px);
            opacity: 0.8;
            mix-blend-mode: screen;
            pointer-events: none;
            z-index: -1; 
        }
    }

    &__image-wrapper {
        position: relative;
        overflow: hidden;
        clip-path: polygon(5% 0px, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%);

        &::before {
            content: "";
            position: absolute;
            top: -40px;
            left: -40px;
            width: calc(100% + 80px);
            height: calc(100% + 80px);
            background: radial-gradient(ellipse at 30% 30%, rgba($accent, 0.6) 0%, rgba($accent, 0.3) 30%, rgba($accent, 0.1) 60%, transparent 100%);
            filter: blur(70px);
            opacity: 0.8;
            z-index: -1;
            pointer-events: none;
        }
    }

    &__overlay-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        background-color: rgba(#0a0a0a, 0.8);
        backdrop-filter: blur(10px);
        padding: 32px;
        border-radius: 8px;
        width: 75%;

        @media screen and (max-width: 767px) {
            padding: 16px;
        }
    }

    &__overlay-icon {
        color: $accent;
        margin-bottom: 16px;

        @media screen and (max-width: 767px) {
            font-size: 24px;
        }
    }

    &__overlay-title {
        font-size: 24px;
        color: white;
        margin-bottom: 16px;

        @media screen and (max-width: 767px) {
            font-size: 16px;
        }
    }

    &__overlay-description {
        color: #d1d1d1;

        @media screen and (max-width: 767px) {
            font-size: 14px;
        }
    }
}
</style>
