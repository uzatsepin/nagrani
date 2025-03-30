<template>
    <div class="hero-section">
        <!-- Динамический фон с частицами -->
        <div
            class="hero__particles"
            id="hero__particles"></div>

        <!-- Градиентные эффекты для глубины -->
        <div class="hero__gradient-left"></div>
        <div class="hero__gradient-right"></div>

        <NuxtLayout name="container">
            <section class="hero">
                <div class="hero__content-wrapper">
                    <OthersBadge
                        data-aos="fade-down"
                        data-aos-duration="800"
                        >NaGrani</OthersBadge
                    >
                    <h1
                        class="hero__title"
                        data-aos="fade-up"
                        data-aos-duration="1000">
                        Наука <span class="hero__title-accent">виживання</span> – це система знань, яка рятує життя
                    </h1>

                    <div
                        class="hero__features"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="200">
                        <div class="hero__feature">
                            <Icon
                                name="lucide:check-circle"
                                class="hero__feature-icon" />
                            <span>Практичні навички</span>
                        </div>
                        <div class="hero__feature">
                            <Icon
                                name="lucide:shield"
                                class="hero__feature-icon" />
                            <span>Готовність до будь-яких ситуацій</span>
                        </div>
                        <div class="hero__feature">
                            <Icon
                                name="lucide:award"
                                class="hero__feature-icon" />
                            <span>Досвідчені інструктори</span>
                        </div>
                    </div>

                    <p
                        class="hero__description"
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        data-aos-delay="300">
                        Світ непередбачуваний, і ніколи не знаєш, коли доведеться покладатися лише на власні сили. Наші курси виживання навчать вас діяти
                        впевнено в будь-яких умовах.
                    </p>

                    <div
                        class="hero__cta"
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        data-aos-delay="400">
                        <button class="btn-primary hero__btn">
                            Почати навчання
                            <Icon
                                name="lucide:arrow-right"
                                size="18"
                                class="hero__btn-icon" />
                        </button>

                        <button class="btn-secondary hero__btn-outline">
                            <Icon
                                name="lucide:play"
                                size="18"
                                class="hero__btn-icon-play" />
                            <span>Відео про нас</span>
                        </button>
                    </div>
                </div>

                <div
                    class="hero__image-container"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <div class="hero__image-wrapper">
                        <NuxtImg
                            src="/images/hero-image.webp"
                            width="708"
                            height="650"
                            format="webp"
                            class="hero__image"
                            alt="Survival training image"
                            loading="eager"
                            ref="heroImage" />

                        <div class="hero__floating-element hero__floating-element--1">
                            <Icon
                                name="lucide:compass"
                                size="32" />
                            <span>Орієнтування</span>
                        </div>

                        <div class="hero__floating-element hero__floating-element--2">
                            <Icon
                                name="lucide:heart-pulse"
                                size="32" />
                            <span>Медицина</span>
                        </div>

                        <div class="hero__floating-element hero__floating-element--3">
                            <Icon
                                name="lucide:flame"
                                size="32" />
                            <span>Виживання</span>
                        </div>

                        <div class="hero__image-frame"></div>
                    </div>

                    <div class="hero__scroll-indicator">
                        <span>Гортай вниз</span>
                        <Icon
                            name="lucide:chevrons-down"
                            class="hero__scroll-icon" />
                    </div>
                </div>

                <div
                    class="hero__stats"
                    data-aos="fade-up"
                    data-aos-delay="500">
                    <div class="hero__stat">
                        <div class="hero__stat-number">{{ statCounters[0].current }}{{ statCounters[0].suffix }}</div>
                        <div class="hero__stat-text">Випускників</div>
                    </div>
                    <div class="hero__stat-divider"></div>
                    <div class="hero__stat">
                        <div class="hero__stat-number">{{ statCounters[1].current }}{{ statCounters[1].suffix }}</div>
                        <div class="hero__stat-text">Програм</div>
                    </div>
                    <div class="hero__stat-divider"></div>
                    <div class="hero__stat">
                        <div class="hero__stat-number">{{ statCounters[2].current }}{{ statCounters[2].suffix }}</div>
                        <div class="hero__stat-text">Задоволених</div>
                    </div>
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const heroImage = ref<HTMLImageElement | null>(null);
const statCounters = ref([
    { current: 0, target: 5000, suffix: "+" },
    { current: 0, target: 15, suffix: "+" },
    { current: 0, target: 97, suffix: "%" }
]);
let scrollListener: ((event: Event) => void) | null = null;
let animationInterval: number | null = null;

// Проверка для particles.js
const initParticles = () => {
    // Проверяем, существует ли глобальный объект particlesJS
    if (typeof window !== "undefined" && window.particlesJS) {
        window.particlesJS("hero__particles", {
            particles: {
                number: {
                    value: 50, // Увеличиваем количество частиц с 30 до 50
                    density: { enable: true, value_area: 800 }
                },
                color: { value: "#ffffff" },
                opacity: {
                    value: 0.5, // Увеличиваем непрозрачность с 0.3 до 0.5
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.2,
                        sync: false
                    }
                },
                size: {
                    value: 4, // Увеличиваем размер частиц с 3 до 4
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.5,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true, // Добавляем соединительные линии
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5, // Увеличиваем скорость с 1 до 1.5
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: { enable: true, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true, // Добавляем интерактивность при наведении
                        mode: "bubble"
                    },
                    onclick: {
                        enable: true, // Интерактивность при клике
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 200,
                        size: 6,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    } else {
        console.warn("particles.js not available");
    }
};

// Анимация счетчиков в статистике
const animateCounters = () => {
    // Определяем скорость инкремента для каждого счетчика
    const speeds = statCounters.value.map((counter) => {
        return Math.ceil(counter.target / 100); // Делим на 100 для создания анимации примерно за 1-2 секунды
    });

    // Запускаем анимацию счетчика
    if (animationInterval) clearInterval(animationInterval);

    animationInterval = window.setInterval(() => {
        let finished = true;

        statCounters.value.forEach((counter, index) => {
            if (counter.current < counter.target) {
                // Инкрементируем текущее значение
                counter.current += speeds[index];

                // Убеждаемся, что не превышаем целевое значение
                if (counter.current > counter.target) {
                    counter.current = counter.target;
                } else {
                    finished = false;
                }
            }
        });

        // Если все счетчики достигли своих целевых значений, останавливаем интервал
        if (finished && animationInterval) {
            clearInterval(animationInterval);
            animationInterval = null;
        }
    }, 20);
};

// Определяем функцию для проверки видимости элемента
const isElementInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
};

onMounted(() => {
    // Инициализация эффекта parallax
    const handleScroll = () => {
        if (heroImage.value) {
            const scrollPos = window.scrollY;
            const tiltFactor = scrollPos * 0.05;
            if (tiltFactor < 20) {
                heroImage.value.style.transform = `perspective(1000px) rotateX(${tiltFactor}deg)`;
            }
        }

        // Проверяем, виден ли блок статистики и запускаем анимацию счетчиков
        const statsElement = document.querySelector(".hero__stats");
        if (statsElement && isElementInViewport(statsElement as HTMLElement) && !animationInterval) {
            animateCounters();
        }
    };

    window.addEventListener("scroll", handleScroll);
    scrollListener = handleScroll;

    // Для particles.js нужно добавить скрипт в head и инициализировать после загрузки
    if (process.client) {
        // Проверяем, загружен ли уже скрипт
        if (!document.getElementById("particles-js-script")) {
            const script = document.createElement("script");
            script.id = "particles-js-script";
            script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
            script.onload = initParticles;
            document.head.appendChild(script);
        } else {
            // Если скрипт уже загружен, просто инициализируем particles
            initParticles();
        }
    }

    // Запускаем анимацию счетчиков на странице загрузки, если блок статистики виден
    setTimeout(() => {
        const statsElement = document.querySelector(".hero__stats");
        if (statsElement && isElementInViewport(statsElement as HTMLElement)) {
            animateCounters();
        }
    }, 1000);
});

onUnmounted(() => {
    if (scrollListener) {
        window.removeEventListener("scroll", scrollListener);
    }
    if (animationInterval) {
        clearInterval(animationInterval);
    }
});
</script>

<style scoped lang="scss">
.hero-section {
    position: relative;
    overflow: hidden;
    background-color: #0a0a0a;
    padding: 32px 0 64px;

    @media (min-width: 768px) {
        padding: 64px 0;
    }
}

.hero__particles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.7; // Увеличиваем общую непрозрачность частиц
}

.hero__gradient-left {
    position: absolute;
    top: -20%;
    left: -10%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba($accent, 0.2) 0%, rgba($accent, 0.05) 40%, transparent 70%);
    filter: blur(60px);
    z-index: 0;
}

.hero__gradient-right {
    position: absolute;
    bottom: -10%;
    right: -10%;
    width: 70%;
    height: 70%;
    background: radial-gradient(circle, rgba($accent, 0.15) 0%, rgba($accent, 0.05) 40%, transparent 70%);
    filter: blur(70px);
    z-index: 0;
}

.hero {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: center;
    }

    @media (min-width: 992px) {
        grid-template-columns: 610px 1fr;
        gap: 64px;
    }

    @media (min-width: 1200px) {
        gap: 80px;
    }

    &__badge {
        display: inline-block;
        background-color: rgba($accent, 0.2);
        border-radius: 50px;
        padding: 6px 16px;
        margin-bottom: 20px;
        border: 1px solid rgba($accent, 0.3);
        box-shadow: 0 0 20px rgba($accent, 0.2);

        &-text {
            color: $accent;
            font-weight: 600;
            font-size: 14px;
            letter-spacing: 0.5px;
        }
    }

    &__title {
        font-family: "Russo One", sans-serif;
        font-size: 28px;
        line-height: 1.2;
        margin-bottom: 24px;
        color: white;

        @media (min-width: 768px) {
            font-size: 32px;
        }

        @media (min-width: 992px) {
            font-size: 38px;
        }

        &-accent {
            color: $accent;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: -4px;
                width: 100%;
                height: 2px;
                background-color: $accent;
            }
        }
    }

    &__features {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 24px;

        @media (min-width: 768px) {
            gap: 10px 20px;
        }
    }

    &__feature {
        display: flex;
        align-items: center;
        font-size: 15px;
        color: #d1d1d1;

        @media (min-width: 768px) {
            font-size: 16px;
        }

        &-icon {
            color: $accent;
            margin-right: 10px;
            flex-shrink: 0;
        }
    }

    &__description {
        color: #a0a0a0;
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 32px;

        @media (min-width: 768px) {
            font-size: 16px;
            margin-bottom: 40px;
        }
    }

    &__cta {
        display: flex;
        flex-direction: column;
        gap: 16px;

        @media (min-width: 480px) {
            flex-direction: row;
            align-items: center;
            gap: 20px;
        }
    }

    &__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        @media (min-width: 480px) {
            width: auto;
        }

        &-icon {
            margin-left: 8px;
            transition: transform 0.3s;

            .hero__btn:hover & {
                transform: translateX(4px);
            }
        }

        &-icon-play {
            margin-right: 8px;
            color: $accent;
        }
    }

    &__image-container {
        position: relative;
        order: -1;
        margin-bottom: 10px;

        @media (min-width: 768px) {
            order: 0;
            margin-bottom: 0;
        }
    }

    &__image-wrapper {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        transform-style: preserve-3d;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(45deg, rgba($accent, 0.3) 0%, transparent 40%, transparent 60%, rgba($accent, 0.3) 100%);
            z-index: 2;
            opacity: 0.6;
            pointer-events: none;
        }
    }

    &__image {
        width: 100%;
        height: auto;
        display: block;
        transform-origin: center top;
        transition: transform 0.3s;
        will-change: transform;
    }

    &__image-frame {
        position: absolute;
        inset: 0;
        border: 3px solid rgba($accent, 0.3);
        border-radius: 12px;
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
            border-radius: 8px 0 0 0;
        }

        &::after {
            bottom: -3px;
            right: -3px;
            border-width: 0 3px 3px 0;
            border-radius: 0 0 8px 0;
        }
    }

    &__floating-element {
        position: absolute;
        display: flex;
        align-items: center;
        background: rgba(#1a1a1a, 0.85);
        border: 1px solid rgba($accent, 0.4);
        border-radius: 8px;
        padding: 8px 14px;
        z-index: 3;
        box-shadow: 0 5px 15px rgba(#000, 0.3);
        transform: translateY(0);
        animation: float 4s ease-in-out infinite;

        span {
            margin-left: 8px;
            font-size: 14px;
            font-weight: 500;
        }

        svg {
            color: $accent;
        }

        &--1 {
            top: 15%;
            left: 10%;
            animation-delay: 0s;
        }

        &--2 {
            top: 50%;
            right: 10%;
            animation-delay: 1s;
        }

        &--3 {
            bottom: 15%;
            left: 25%;
            animation-delay: 2s;
        }
    }

    &__scroll-indicator {
        position: absolute;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #a0a0a0;
        opacity: 0.7;
        font-size: 13px;
        animation: bounce 2s ease-in-out infinite;

        @media (min-width: 768px) {
            display: none;
        }

        span {
            margin-bottom: 5px;
        }
    }

    &__stats {
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(#1a1a1a, 0.5);
        border: 1px solid rgba(#fff, 0.1);
        border-radius: 12px;
        padding: 16px;
        margin-top: 10px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(4px); // Добавляем эффект размытия фона
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
        }

        @media (min-width: 768px) {
            margin-top: 40px;
            grid-column: span 2;
        }

        // Добавляем подсветку с акцентным цветом
        &::before {
            content: "";
            position: absolute;
            inset: -1px;
            border-radius: 13px;
            background: linear-gradient(135deg, rgba($accent, 0.7) 0%, transparent 50%, rgba($accent, 0.7) 100%);
            opacity: 0.3;
            z-index: -1;
        }
    }

    &__stat {
        text-align: center;
        flex: 1;
        position: relative;

        &-number {
            font-size: 24px; // Немного увеличиваем размер
            color: $accent;
            margin-bottom: 4px;
            text-shadow: 0 0 10px rgba($accent, 0.5); // Добавляем свечение

            @media (min-width: 768px) {
                font-size: 30px; // Увеличиваем размер для больших экранов
            }
        }

        &-text {
            font-size: 13px;
            color: #a0a0a0;

            @media (min-width: 768px) {
                font-size: 14px;
            }
        }

        &-divider {
            width: 1px;
            height: 40px;
            background: linear-gradient(to bottom, transparent, rgba(#fff, 0.2), transparent);
            margin: 0 15px;
        }
    }
}

.btn-primary {
    background-color: $accent;
    color: white;
    padding: 14px 28px;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;

    &:hover {
        background-color: darken($accent, 5%);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -50px;
        width: 30px;
        height: 100%;
        background: rgba(#fff, 0.3);
        transform: skewX(-30deg);
        filter: blur(10px);
        opacity: 0;
        transition: 0.7s;
    }

    &:hover::before {
        animation: shine 1.5s;
    }
}

.btn-secondary {
    background-color: transparent;
    color: white;
    padding: 13px 28px;
    border: 1px solid rgba(#fff, 0.15);
    border-radius: 6px;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        border-color: rgba($accent, 0.5);
        background-color: rgba(#fff, 0.05);
    }
}

// Анимации
@keyframes float {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes bounce {
    0%,
    100% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(-50%) translateY(-7px);
    }
}

@keyframes shine {
    from {
        left: -100px;
        opacity: 0.7;
    }
    to {
        left: 120%;
        opacity: 0;
    }
}
</style>
