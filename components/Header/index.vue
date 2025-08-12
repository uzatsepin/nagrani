<template>
    <NuxtLayout name="container">
        <header class="header">
            <NuxtLink to="/" class="header__logo">
                <NuxtImg
                    src="/images/logo.svg"
                    alt="NaGrani - школа виживання та безпеки, логотип"
                    width="125"
                    height="62"
                    loading="eager"
                    :preload="true"
                    fetchpriority="high" />
            </NuxtLink>

            <button
                class="header__burger"
                :class="{ 'header__burger--active': isMenuOpen }"
                @click="toggleMenu"
                aria-label="Меню">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div
                class="header__content"
                :class="{ 'header__content--active': isMenuOpen }">
                <nav class="header__nav">
                    <ul class="header__list">
                        <li class="header__list-item">
                            <a
                                class="header__list-item-link"
                                href="#"
                                @click="closeMenu"
                                >Головна</a
                            >
                        </li>
                        <li class="header__list-item">
                            <a
                                class="header__list-item-link"
                                href="#about"
                                @click="closeMenu"
                                >Про проєкт</a
                            >
                        </li>
                        <li class="header__list-item">
                            <a
                                class="header__list-item-link"
                                href="#directions"
                                @click="closeMenu"
                                >Напрямки</a
                            >
                        </li>
                        <li class="header__list-item">
                            <a
                                class="header__list-item-link"
                                href="#target"
                                @click="closeMenu"
                                >Для кого</a
                            >
                        </li>
                        <li class="header__list-item">
                            <a
                                class="header__list-item-link"
                                href="#courses"
                                @click="closeMenu"
                                >Курси</a
                            >
                        </li>
                    </ul>
                </nav>

                <div class="header__buttons">
                    <div class="header__social">
                        <a
                            rel="noopener, noreferrer"
                            target="_blank"
                            class="header__social-link"
                            href="https://www.instagram.com/naukavizhivat_nagrani/">
                            <Icon name="line-md:instagram" />
                        </a>
                        <a
                            rel="noopener, noreferrer"
                            class="header__social-link"
                            target="_blank"
                            href="https://t.me/nagranivyzhyvannya">
                            <Icon name="line-md:telegram" />
                        </a>
                    </div>
                    <OthersPrimaryButton @click="contactStore.contactPopup = true"> Записатись на курс </OthersPrimaryButton>
                </div>
            </div>
        </header>
    </NuxtLayout>
</template>

<script setup lang="ts">
const contactStore = useContactsStore();

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;

    if (isMenuOpen.value) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
};

const closeMenu = () => {
    isMenuOpen.value = false;
    document.body.style.overflow = "auto";
};

const handleResize = () => {
    if (window.innerWidth > 992 && isMenuOpen.value) {
        closeMenu();
    }
};

onMounted(() => {
    window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
});

onUnmounted(() => {
    document.body.style.overflow = "auto";
});
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 100px;
    padding: 20px 0;
    position: relative;
    z-index: 100;

    &__logo {
        z-index: 101;
    }

    &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
        margin-left: 120px;

        @media (max-width: 992px) {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(#0a0a0a, 0.98);
            flex-direction: column;
            justify-content: center;
            margin-left: 0;
            padding: 80px 20px 40px;
            transform: translateX(100%);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
            overflow-y: auto;
            z-index: 99;

            &--active {
                transform: translateX(0);
                opacity: 1;
            }
        }
    }

    &__burger {
        display: none;
        position: relative;
        width: 30px;
        height: 22px;
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 101;

        @media (max-width: 992px) {
            display: block;
            position: absolute;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            right: 16px;
        }

        span {
            position: absolute;
            width: 100%;
            height: 3px;
            background-color: white;
            border-radius: 2px;
            transition: all 0.3s ease;

            &:nth-child(1) {
                top: 0;
            }

            &:nth-child(2) {
                top: 50%;
                transform: translateY(-50%);
            }

            &:nth-child(3) {
                bottom: 0;
            }
        }

        &--active {
            span {
                &:nth-child(1) {
                    top: 50%;
                    transform: translateY(-50%) rotate(45deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                }

                &:nth-child(3) {
                    bottom: 50%;
                    transform: translateY(50%) rotate(-45deg);
                }
            }
        }
    }

    &__nav {
        @media (max-width: 992px) {
            width: 100%;
            margin-bottom: 40px;
        }
    }

    &__list {
        display: flex;
        gap: 24px;

        @media (max-width: 992px) {
            flex-direction: column;
            text-align: center;
            gap: 20px;
        }

        &-item {
            &-link {
                text-transform: uppercase;
                transition: color 250ms ease-in-out;
                position: relative;
                font-size: 16px;

                @media (max-width: 992px) {
                    font-size: 20px;
                    padding: 8px 0;
                    display: block;
                }

                &:after {
                    content: "";
                    width: 0;
                    height: 2px;
                    background-color: $accent;
                    position: absolute;
                    bottom: -3px;
                    left: 0;
                    display: inline-block;
                    opacity: 0;
                    transition: width 250ms ease-in-out;

                    @media (max-width: 992px) {
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }

                &:hover {
                    color: $accent;
                }

                &:hover:after {
                    opacity: 1;
                    width: 100%;
                }
            }
        }
    }

    &__buttons {
        display: flex;
        gap: 34px;
        align-items: center;

        @media (max-width: 992px) {
            flex-direction: column;
            gap: 30px;
        }
    }

    &__social {
        display: flex;
        align-items: center;
        gap: 16px;

        @media (max-width: 992px) {
            gap: 24px;
        }

        &-link {
            display: inline-block;
            width: 24px;
            height: 24px;
            background-repeat: no-repeat;
            transition: background-image 250ms ease-in-out;

            & span {
                width: 24px;
                height: 24px;
                opacity: 0.7;
                transition: opacity 250ms ease-in-out;

                &:hover {
                    opacity: 1;
                }
            }

            @media (max-width: 992px) {
                width: 32px;
                height: 32px;
                background-size: contain;
            }
        }
    }
}
</style>
