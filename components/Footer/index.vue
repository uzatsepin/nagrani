<template>
    <footer class="footer">
        <NuxtLayout name="container">
            <div class="footer__grid">
                <div class="footer__column">
                    <a
                        href="/"
                        class="footer__logo">
                        <NuxtImg
                            src="/images/logo.svg"
                            alt="NaGrani - школа виживання та безпеки"
                            width="125"
                            height="62"
                            loading="lazy" />
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
                            href="https://t.me/nagranivyzhyvannya"
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
                                >Головна</a
                            >
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

                <div class="footer__column">
                    <h3 class="footer__heading">ЮРИДИЧНІ ПОСИЛАННЯ</h3>
                    <ul class="footer__list">
                        <li>
                            <NuxtLink
                                to="/publichna-oferta"
                                class="footer__link"
                                >Публічна оферта</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/politika-konfidentsiynosti"
                                class="footer__link"
                                >Політика конфіденційності</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/politika-povernennya"
                                class="footer__link"
                                >Політика повернення</NuxtLink
                            >
                        </li>
                        <li>
                            <NuxtLink
                                to="/privacy-cookies"
                                class="footer__link"
                                >Політика Cookies</NuxtLink
                            >
                        </li>
                    </ul>
                </div>

                <div class="footer__column">
                    <h3 class="footer__heading">КОНТАКТИ</h3>
                    <ul class="footer__contact-list">
                        <!-- <li class="footer__contact-item">
                            <Icon
                                name="lucide:map-pin"
                                size="18"
                                class="footer__contact-icon" />
                            <span>вул. Виживання, 42, Київ, 01001, Україна</span>
                        </li> -->
                        <!-- <li class="footer__contact-item">
                            <Icon
                                name="lucide:phone"
                                size="18"
                                class="footer__contact-icon" />
                            <a
                                :href="`tel:${contacts.phone}`"
                                v-if="contacts.phone"
                                class="footer__link"
                                >{{ contacts.phone }}</a
                            >
                        </li> -->
                        <li class="footer__contact-item">
                            <Icon
                                name="lucide:mail"
                                size="18"
                                class="footer__contact-icon" />
                            <a
                                :href="`mailto:${contactsStore.contacts.email}`"
                                v-if="contactsStore.contacts.email"
                                class="footer__link"
                                >{{ contactsStore.contacts.email }}</a
                            >
                        </li>
                    </ul>

                    <OthersPrimaryButton @click="contactsStore.contactPopup = true"> ЗАЛИШИЛИСЬ ПИТАННЯ? </OthersPrimaryButton>
                </div>
            </div>

            <div class="footer__copyright">
                <div class="footer__payment-methods">
                    <span class="footer__payment-text">Способи оплати:</span>
                    <div class="footer__payment-logos">
                        <div class="footer__payment-logo apple-pay"></div>
                        <div class="footer__payment-logo google-pay"></div>
                        <div class="footer__payment-logo visa"></div>
                        <div class="footer__payment-logo mastercard"></div>
                    </div>
                </div>
                <p>&copy; {{ currentYear }} NaGrani. Всі права захищені.</p>
            </div>
        </NuxtLayout>
    </footer>
</template>

<script lang="ts" setup>
const contactsStore = useContactsStore();

await useFetch("/api/directus/items/contacts", {
    server: true,
    headers: {
        "Content-Type": "application/json"
    },
    onResponse({ response }) {
        if (response._data) {
            contactsStore.contacts = response._data.data;
        } else {
            throw new Error("Invalid data format");
        }
    }
});

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
            grid-template-columns: repeat(4, 1fr);
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

    &__payment-methods {
        margin-bottom: 24px;
        padding-bottom: 24px;
        border-bottom: 1px solid #1a1a1a;
    }

    &__payment-text {
        display: block;
        color: #a0a0a0;
        font-size: 14px;
        margin-bottom: 16px;
        font-weight: 500;
    }

    &__payment-logos {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;

        @media (max-width: 767px) {
            gap: 16px;
        }
    }

    &__payment-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #1a1a1a;
        border-radius: 8px;
        transition: all 0.3s ease;

        &.apple-pay {
            width: 64px;
            height: 64px;
            background: url("/icons/payment-methods/applepay.svg") no-repeat center;
            background-size: contain;
        }

        &.google-pay {
            width: 64px;
            height: 64px;
            background: url("/icons/payment-methods/googlepay.svg") no-repeat center;
            background-size: contain;
        }

        &.visa {
            width: 64px;
            height: 64px;
            background: url("/icons/payment-methods/visa.svg") no-repeat center;
            background-size: contain;
        }

        &.mastercard {
            width: 64px;
            height: 64px;
            background: url("/icons/payment-methods/mastercard.svg") no-repeat center;
            background-size: contain;
        }
    }

    &__column {
        .primary-button {
            margin-top: 24px;
        }
    }
}
</style>
