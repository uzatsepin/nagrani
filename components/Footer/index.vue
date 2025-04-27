<template>
    <footer class="footer">
        <NuxtLayout name="container">
            <div class="footer__grid">
                <div class="footer__column">
                    <a
                        href="/"
                        class="footer__logo">
                        <NuxtImg src="/images/logo.svg" alt="NaGrani" width="125" height="62" />
                    </a>
                    <p class="footer__desc">Пройдена небезпека – безпечна. Чим більше небезпек позаду, тим безпечніше життя попереду.</p>
                    <div class="footer__socials">
                        <NuxtLink
                            to="https://www.instagram.com/naukavizhivat_nagrani/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="footer__social-link">
                            <Icon
                                name="lucide:instagram"
                                size="20" />
                        </NuxtLink>
                        <a
                            href="https://t.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="footer__social-link">
                            <Icon
                                name="lucide:send"
                                size="20" />
                        </a>
                    </div>
                </div>

                <div class="footer__column">
                    <h3 class="footer__heading">НАВІГАЦІЯ</h3>
                    <ul class="footer__list">
                        <li>
                            <a
                                href="/"
                                class="footer__link"
                                >Головна</a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                class="footer__link"
                                >Про проєкт</a
                            >
                        </li>
                        <li>
                            <a
                                href="#target"
                                class="footer__link"
                                >Для кого</a
                            >
                        </li>
                        <li>
                            <a
                                href="#mission"
                                class="footer__link"
                                >Місія</a
                            >
                        </li>
                        <li>
                            <a
                                href="#courses"
                                class="footer__link"
                                >Курси</a
                            >
                        </li>
                    </ul>
                </div>

                <!-- <div class="footer__column">
                    <h3 class="footer__heading">КОРИСНІ ПОСИЛАННЯ</h3>
                    <ul class="footer__list">
                        <li>
                            <a
                                href="#"
                                class="footer__link"
                                >Блог</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="footer__link"
                                >Календар заходів</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="footer__link"
                                >Політика конфіденційності</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="footer__link"
                                >Умови використання</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="footer__link"
                                >FAQ</a
                            >
                        </li>
                    </ul>
                </div> -->

                <div class="footer__column">
                    <h3 class="footer__heading">КОНТАКТИ</h3>
                    <ul class="footer__contact-list">
                        <li class="footer__contact-item">
                            <Icon
                                name="lucide:map-pin"
                                size="18"
                                class="footer__contact-icon" />
                            <span>вул. Виживання, 42, Київ, 01001, Україна</span>
                        </li>
                        <li class="footer__contact-item">
                            <Icon
                                name="lucide:phone"
                                size="18"
                                class="footer__contact-icon" />
                            <a
                                href="tel:+380501234567"
                                class="footer__link"
                                >+38 (050) 123-45-67</a
                            >
                        </li>
                        <li class="footer__contact-item">
                            <Icon
                                name="lucide:mail"
                                size="18"
                                class="footer__contact-icon" />
                            <a
                                href="mailto:info@budda.life"
                                class="footer__link"
                                >info@budda.life</a
                            >
                        </li>
                    </ul>

                    <OthersPrimaryButton
                        @click="isContactModalOpen = true">
                        ЗАЛИШИЛИСЬ ПИТАННЯ?
                    </OthersPrimaryButton>
                </div>
            </div>

            <div class="footer__copyright">
                <p>&copy; {{ currentYear }} NaGrani. Всі права захищені.</p>
            </div>
	</NuxtLayout>
    </footer>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

const isContactModalOpen = ref(false);
const currentYear = computed(() => new Date().getFullYear());
</script>

<style lang="scss" scoped>
.footer {
    background-color: #0a0a0a;
    padding-top: 64px;
    padding-bottom: 32px;

    &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
        padding-bottom: 40px;
        border-bottom: 1px solid #1a1a1a;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 992px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    &__logo {
        display: inline-block;
        margin-bottom: 24px;
        font-family: "Russo One", sans-serif;
        font-size: 24px;
        color: white;
        text-decoration: none;

        &-accent {
            color: $accent;
        }
    }

    &__desc {
        color: #a0a0a0;
        margin-bottom: 24px;
    }

    &__socials {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    &__social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #272727;
        color: white;
        transition: background-color 0.3s;

        &:hover {
            background-color: $accent;
        }
    }

    &__heading {
        font-family: "Russo One", sans-serif;
        color: white;
        font-size: 18px;
        margin-bottom: 24px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    &__link {
        color: #a0a0a0;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: $accent;
        }
    }

    &__contact-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__contact-item {
        display: flex;
        align-items: flex-start;
        color: #a0a0a0;
    }

    &__contact-icon {
        color: $accent;
        margin-right: 12px;
        flex-shrink: 0;
        margin-top: 4px;
    }

    &__copyright {
        padding-top: 32px;
        text-align: center;
        color: #777;
    }

	&__column {
		.primary-button {
			margin-top: 24px;
		}
	}
}
</style>
