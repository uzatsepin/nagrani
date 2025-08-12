<template>
    <section
        id="about"
        class="about">
        <NuxtLayout name="container">
                <div class="about__header" data-aos="fade-up">
                    <OthersBadge>Історія проєкту</OthersBadge>
                <div>
                    <h2 class="about__title">ПРО <span class="about__title-accent">ПРОЄКТ</span></h2>
                <p class="about__subtitle">
                    NaGrani — проєкт, який пропонує вичавку знань і практичних навичок із особистої безпеки та техніки виживання в різних екстремальних ситуаціях: у місті, у горах та в дикій природі. Це твоя основа для повсякденного життя й перевага в разі нештатних ситуацій.
                </p></div>
            </div>

            <div class="about__grid">
                <div class="about__image-container" data-aos="fade-right">
                    <div 
                        class="about__image-wrapper"
                        @mousemove="handleImageHover"
                        @mouseleave="resetImageEffect"
                        ref="imageWrapper">
                        <NuxtImg
                            src="/images/about-instructors.webp"
                            alt="Професійні інструктори NaGrani - тренування команди з виживання та тактичної підготовки"
                            class="about__image"
                            width="700"
                            height="500"
                            format="webp"
                            quality="85"
                            loading="lazy"
                            placeholder />
                        <div class="about__image-overlay"></div>
                    </div>

                    <div class="about__card" data-aos="fade-up" data-aos-delay="200">
                        <h3 class="about__card-title">НАВЧАННЯ З ПРОФЕСІОНАЛАМИ</h3>
                        <p class="about__card-text">
                            Наші інструктори — це колишні військові, рятувальники та експерти з виживання з реальним досвідом роботи в екстремальних умовах.
                        </p>
                        <button @click="showFullTeamInfo = true" class="about__card-button">
                            Дізнатися більше
                            <span class="about__card-button-icon">→</span>
                        </button>
                    </div>
                </div>

                <div class="about__content" data-aos="fade-left">
                    <h3 class="about__content-title">НАША ІСТОРІЯ</h3>
                    <div class="about__timeline">
                        <div
                            v-for="(item, index) in timelineItems"
                            :key="index"
                            class="about__timeline-item"
                            :class="{ 'about__timeline-item--active': activeTimelineIndex === index }"
                            data-aos="fade-left"
                            :data-aos-delay="index * 100">
                            <div class="about__timeline-dot"></div>
                            <div class="about__timeline-content">
                                <span class="about__timeline-year">{{ item.year }}</span>
                                <h4 class="about__timeline-title">{{ item.title }}</h4>
                                <p class="about__timeline-description">{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="about__cta" data-aos="fade-up">
                <h3 class="about__cta-title">ГОТОВІ ДО НОВИХ ВИКЛИКІВ?</h3>
                <p class="about__cta-text">Приєднуйтесь до наших курсів та отримайте навички, які допоможуть контролювати твоє життя і не бути заручником обставин</p>
                <button class="about__cta-button">Записатись на курс</button>
            </div>
        </NuxtLayout>

        <!-- Модальне вікно з інформацією про команду -->
        <Transition name="modal">
            <div v-if="showFullTeamInfo" class="about__modal">
                <div class="about__modal-content">
                    <button @click="showFullTeamInfo = false" class="about__modal-close">×</button>
                    <h3 class="about__modal-title">НАША КОМАНДА ПРОЄКТУ</h3>
                    <div class="about__modal-text">
                        <p>
                            Команда проєкту — це наші однодумці та експерти з багаторічним досвідом роботи в таких сферах:
                        </p>
                        <ul>
                            <li>Військової та тактичної підготовки</li>
                            <li>Рятувальних операцій</li>
                            <li>Екстремального виживання</li>
                            <li>Тактичної медицини</li>
                            <li>Безпеки в міському середовищі</li>
                        </ul>
                        <p>
                            Кожен із цих експертів пройшов власний шлях і має цінний досвід, який ви можете перейняти. Ми постійно вдосконалюємо методики навчання, щоб забезпечити найвищу якість підготовки.
                        </p>
                    </div>
                    <!-- <div class="about__modal-instructors">
                        <div v-for="(instructor, index) in instructors" :key="index" class="about__modal-instructor">
                            <div class="about__modal-instructor-photo">
                                <div class="about__modal-instructor-placeholder"></div>
                            </div>
                            <div class="about__modal-instructor-info">
                                <h4>{{ instructor.name }}</h4>
                                <p>{{ instructor.role }}</p>
                                <span>{{ instructor.experience }}</span>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </Transition>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const showFullTeamInfo = ref(false);
const activeTimelineIndex = ref(null);
const imageWrapper = ref<HTMLElement | null>(null);


const handleImageHover = (e: MouseEvent) => {
    if (!imageWrapper.value) return;
    
    const rect = imageWrapper.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width - 0.5) * 2;
    const yPercent = (y / rect.height - 0.5) * 2;
    
    const rotateX = yPercent * -5;
    const rotateY = xPercent * 5;
    
    imageWrapper.value.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const resetImageEffect = () => {
    if (!imageWrapper.value) return;
    imageWrapper.value.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
};

const timelineItems = [
    {
        year: "2018",
        title: "Заснування проєкту",
        description: "Початок лісових заходів по темі виживання. Пізніше додалися тренінги з особистої безпеки.",
    },
    {
        year: "2019-2021",
        title: "Розширення тематики",
        description: "Розвиток гірської тематики, такі як скелелазіння і альпінізм. Початок походів та сходжень в гори.",
    },
    {
        year: "2022",
        title: "Масштабування заходів",
        description: "Проведення навчання за різними напрямками підготовки в Одесі, Харкові, Дніпрі, містах Херсонщини, Миколаєві, Донецькій області та Сумщині. Створення методології навчань для військових сил оборони України та різних силових структур.",
    },
    {
        year: "2023+",
        title: "Підготовка до викликів",
        description: "Підготовка до будь-яких викликів сучасного світу. Розширення онлайн-курсів. Запровадження таких напрямків: вогнева та мінно-вибухова підготовка, бойове виживання, тактична медицина. Комплексні навчання для військовослужбовців та цивільних осіб.",
    }
];

const instructors = [
    { name: 'Олександр Ковальчук', role: 'Головний інструктор', experience: '15 років військового досвіду' },
    { name: 'Марія Петренко', role: 'Експерт з тактичної медицини', experience: '10 років у ДСНС' },
    { name: 'Іван Мельник', role: 'Інструктор з виживання', experience: '12 років досвіду в екстремальних умовах' },
    { name: 'Наталія Шевченко', role: 'Психолог', experience: 'Спеціаліст з поведінки в кризових ситуаціях' }
];

</script>

<style scoped lang="scss">
.about {
    padding: 64px 0;
    background-color: #0a0a0a;
    background-image: url("/images/logo-big.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-attachment: fixed;
    background-blend-mode: overlay;
    overflow: hidden;

    &__header {
        text-align: center;
        margin-bottom: 64px;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
    }

    &__title {
        font-size: 38px;
        color: white;
        margin-bottom: 24px;
        position: relative;
        display: inline-block;

        @media (min-width: 768px) {
            font-size: 46px;
        }

        &-accent {
            color: $accent;
            position: relative;
        }
    }

    &__subtitle {
        color: #d1d1d1;
        max-width: 768px;
        margin: 0 auto;
        font-size: 18px;
        line-height: 1.6;
    }

    &__grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 48px;
        margin-bottom: 80px;

        @media (min-width: 992px) {
            grid-template-columns: repeat(2, 1fr);
            align-items: start;
            gap: 64px;
        }
    }

    &__image-container {
        position: relative;
    }

    &__image-wrapper {
        position: relative;
        overflow: hidden;
        clip-path: polygon(5% 0px, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%);
        height: 100%;
        transition: transform 0.5s ease-out;
        transform-style: preserve-3d;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s ease;
        
        &:hover {
            transform: scale(1.05);
        }
    }

    &__image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(#0a0a0a, 0.8), transparent 70%);
        background-blend-mode: multiply;
    }

    &__card {
        position: absolute;
        bottom: 32px;
        left: 32px;
        right: 32px;
        background-color: rgba(#0a0a0a, 0.85);
        backdrop-filter: blur(8px);
        padding: 28px;
        clip-path: polygon(5% 0px, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%);
        border-left: 3px solid $accent;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        @media screen and (max-width: 767px) {
            padding: 16px;
            left: 8px;
            right: 8px;
            bottom: 8px;
        }
    }

    &__card-title {
        font-size: 22px;
        color: $white;
        margin-bottom: 12px;
        font-family: "Russo One", sans-serif;
        position: relative;
        padding-left: 16px;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 8px;
            height: 80%;
            background-color: $accent;
        }

        @media screen and (max-width: 767px) {
            font-size: 16px;
        }
    }

    &__card-text {
        color: #d1d1d1;
        margin-bottom: 20px;
        line-height: 1.6;

        @media screen and (max-width: 767px) {
            font-size: 12px;
        }
    }

    &__card-button {
        display: inline-flex;
        align-items: center;
        padding: 10px 20px;
        background-color: rgba($accent, 0.2);
        color: $accent;
        border: 1px solid $accent;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        z-index: 1;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color: $accent;
            z-index: -1;
            transition: width 0.3s ease;
        }

        &:hover {
            color: white;

            &::before {
                width: 100%;
            }

            .about__card-button-icon {
                transform: translateX(5px);
            }
        }
    }

    &__card-button-icon {
        margin-left: 8px;
        transition: transform 0.3s ease;
    }

    &__content {
        padding: 16px 0;
    }

    &__content-title {
        font-family: "Russo One", sans-serif;
        font-size: 28px;
        color: white;
        margin-bottom: 32px;
        position: relative;
        display: inline-block;
        padding-bottom: 16px;
        
        &::after {
            content: '';
            position: absolute;
            width: 80px;
            height: 3px;
            background-color: $accent;
            bottom: 0;
            left: 0;
        }
    }

    &__timeline {
        position: relative;
        padding-left: 24px;
        margin-left: 12px;
        overflow-x: hidden;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 8px;
            bottom: 32px;
            width: 3px;
            background-color: $accent;
            background: linear-gradient(to bottom, 
                $accent 0%,
                $accent 20%,
                rgba($accent, 0.8) 40%,
                rgba($accent, 0.6) 60%,
                rgba($accent, 0.4) 80%,
                rgba($accent, 0.2) 100%
            );
        }
    }

    &__timeline-item {
        position: relative;
        padding-bottom: 32px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            transform: translateX(8px);

            .about__timeline-dot {
                transform: scale(1.2);
                box-shadow: 0 0 15px rgba($accent, 0.5);
            }

            .about__timeline-title {
                color: $accent;
            }
        }

        &--active {
            .about__timeline-dot {
                transform: scale(1.3);
                background-color: lighten($accent, 10%);
                box-shadow: 0 0 15px rgba($accent, 0.7);
            }

            .about__timeline-content {
                background-color: rgba(#1a1a1a, 0.5);
                transform: translateX(8px);
            }

            .about__timeline-title {
                color: $accent;
            }
        }
    }

    &__timeline-dot {
        position: absolute;
        left: -30px;
        top: 10px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: $accent;
        transition: all 0.3s ease;
        box-shadow: 0 0 10px rgba($accent, 0.3);
    }

    &__timeline-content {
        padding: 16px 20px;
        border-radius: 8px;
        background-color: rgba(#1a1a1a, 0.2);
        transition: all 0.3s ease;
        
        &:hover {
            background-color: rgba(#1a1a1a, 0.5);
        }
    }

    &__timeline-year {
        display: inline-block;
        background-color: rgba($accent, 0.2);
        padding: 4px 12px;
        border-radius: 4px;
        font-family: "Russo One", sans-serif;
        color: $accent;
        margin-bottom: 12px;
        font-size: 14px;
        position: relative;
        
        &::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 12px;
            width: 40px;
            height: 2px;
            background-color: rgba($accent, 0.5);
        }
    }

    &__timeline-title {
        font-family: "Russo One", sans-serif;
        font-size: 20px;
        color: white;
        margin-bottom: 10px;
        transition: color 0.3s ease;
    }

    &__timeline-description {
        color: #d1d1d1;
        margin-bottom: 10px;
        line-height: 1.6;
    }
    
    &__timeline-details {
        background-color: rgba(#1a1a1a, 0.7);
        padding: 12px;
        margin-top: 12px;
        border-left: 3px solid $accent;
        border-radius: 0 4px 4px 0;
        
        p {
            color: #e0e0e0;
            font-size: 15px;
            line-height: 1.6;
        }
    }

    &__cta {
        text-align: center;
        background-color: rgba(#1a1a1a, 0.7);
        padding: 60px 30px;
        border-radius: 12px;
        margin-bottom: 40px;
        position: relative;
        overflow: hidden;
        
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba($accent, 0.1) 0%, rgba(#1a1a1a, 0) 50%);
            z-index: 0;
        }
    }

    &__cta-title {
        font-family: "Russo One", sans-serif;
        font-size: 28px;
        color: white;
        margin-bottom: 20px;
        position: relative;
    }

    &__cta-text {
        color: #d1d1d1;
        max-width: 600px;
        margin: 0 auto 30px;
        font-size: 18px;
        line-height: 1.6;
        position: relative;
    }

    &__cta-button {
        display: inline-block;
        padding: 16px 32px;
        background-color: $accent;
        color: white;
        font-family: "Russo One", sans-serif;
        font-size: 16px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        z-index: 1;
        border-radius: 4px;
        
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            z-index: -1;
            transform: skewX(-15deg);
        }
        
        &:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            transform: translateY(-3px);
            
            &::before {
                left: 100%;
            }
        }
    }

    &__modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    &__modal-content {
        background-color: #0f0f0f;
        max-width: 800px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 8px;
        padding: 30px;
        position: relative;
        border-top: 4px solid $accent;
        
        @media screen and (max-width: 767px) {
            padding: 20px;
        }
    }

    &__modal-close {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        color: white;
        font-size: 28px;
        cursor: pointer;
        transition: all 0.3s;
        
        &:hover {
            color: $accent;
            transform: rotate(90deg);
            cursor: pointer;
        }
    }

    &__modal-title {
        font-family: "Russo One", sans-serif;
        font-size: 24px;
        color: white;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid rgba($accent, 0.3);
    }

    &__modal-text {
        color: #d1d1d1;
        margin-bottom: 30px;
        
        p {
            margin-bottom: 15px;
            line-height: 1.6;
        }
        
        ul {
            margin-bottom: 15px;
            padding-left: 20px;
            
            li {
                margin-bottom: 8px;
                position: relative;
                padding-left: 20px;
                
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 10px;
                    width: 8px;
                    height: 8px;
                    background-color: $accent;
                    border-radius: 50%;
                }
            }
        }
    }
    
    &__modal-instructors {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        
        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    
    &__modal-instructor {
        display: flex;
        background-color: rgba(#1a1a1a, 0.5);
        padding: 15px;
        border-radius: 8px;
        transition: all 0.3s;
        
        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
    }
    
    &__modal-instructor-photo {
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        margin-right: 15px;
    }
    
    &__modal-instructor-placeholder {
        width: 100%;
        height: 100%;
        background-color: rgba($accent, 0.2);
        border-radius: 50%;
        position: relative;
        
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid $accent;
        }
    }
    
    &__modal-instructor-info {
        h4 {
            color: white;
            font-size: 18px;
            margin-bottom: 5px;
        }
        
        p {
            color: $accent;
            font-size: 14px;
            margin-bottom: 5px;
        }
        
        span {
            display: block;
            color: #999;
            font-size: 14px;
        }
    }
}

// Анімації для модалки
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

// Медіа запити для загальної адаптивності
@media screen and (max-width: 767px) {
    .about {
        padding: 40px 0;
        
        &__timeline-item {
            padding-bottom: 24px;
        }
        
        &__timeline-title {
            font-size: 18px;
        }
        
        &__timeline-dot {
            width: 12px;
            height: 12px;
            left: -27px;
        }
        
        &__cta {
            padding: 40px 20px;
        }
        
        &__cta-title {
            font-size: 18px;
        }
        
        &__cta-text {
            font-size: 14px;
        }
    }
}
</style>