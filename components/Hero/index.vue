<template>
    <NuxtLayout name="container">
        <section class="hero">
            <div
                class="hero__left"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <h1 class="hero__title">Наука виживання – це не випадковість, а система знань і навичок</h1>
                <p class="hero__descr">
                    Світ непередбачуваний, і ніколи не знаєш, коли доведеться покладатися лише на власні сили. Наш курс із виживання навчить вас діяти впевнено
                    у будь-яких умовах – від екстремальних природних умов до надзвичайних ситуацій у місті. Ви дізнаєтесь, як знаходити воду та їжу,
                    орієнтуватися на місцевості, надавати першу допомогу та захищати себе.
                </p>

                <ul class="hero__list">
                    <li class="hero__list-item">Практичні навички та реальні кейси</li>
                    <li class="hero__list-item">Підготовка до будь-яких сценаріїв</li>
                    <li class="hero__list-item">Інструктори з досвідом виживання</li>
                </ul>
                <h2 class="hero__quote">Будьте готові до будь-яких викликів – навчіться виживати вже сьогодні!</h2>
                <div class="hero__button">
                    <OthersPrimaryButton>Детальніше про курс</OthersPrimaryButton>
                </div>
            </div>
            <div
                class="hero__right"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <NuxtImg
                    src="/images/hero-image.png"
                    width="708"
                    format="webp"
                    class="hero__image"
                    alt="NaGrani training image" />
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero {
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    align-items: center;
    padding-bottom: 48px;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 48px;
    }

    @media (min-width: 992px) {
        grid-template-columns: 610px 1fr;
        gap: 64px;
    }

    @media (min-width: 1200px) {
        gap: 120px;
    }

    &__title {
        font-size: 24px;
        line-height: 1.3;

        @media (min-width: 768px) {
            font-size: 28px;
        }

        @media (min-width: 992px) {
            font-size: 32px;
        }
    }

    &__descr {
        margin-top: 16px;
        font-size: 15px;

        @media (min-width: 768px) {
            margin-top: 24px;
            font-size: 16px;
        }
    }

    &__list {
        margin-top: 16px;
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;

        @media (min-width: 768px) {
            margin-top: 24px;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px 16px;
        }

        &-item {
            color: $gray;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 15px;

            @media (min-width: 768px) {
                font-size: 16px;
                gap: 16px;
            }

            &:before {
                content: "";
                flex-shrink: 0;
                display: block;
                width: 20px;
                height: 20px;
                background-image: url("/icons/dot-icon.svg");
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;

                @media (min-width: 768px) {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }

    &__quote {
        margin-top: 16px;
        font-size: 18px;
        line-height: 1.4;

        @media (min-width: 768px) {
            margin-top: 24px;
            font-size: 20px;
        }
    }

    &__button {
        width: 100%;
        margin: 24px auto 0;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 767px) {
            button {
                width: 100%;
                padding: 14px 20px;
                font-size: 15px;
            }
        }
    }

    &__right {
        order: -1;

        @media (min-width: 768px) {
            order: 0;
        }
    }

    &__image {
        width: 100%;
        height: auto;
    }
}
</style>
