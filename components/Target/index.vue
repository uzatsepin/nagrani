<template>
    <section
        id="target"
        class="target">
        <div class="target__container">
            <div class="target__header" data-aos="fade-up">
                <OthersBadge>Цільова аудиторія</OthersBadge>
                <div>
                    <h2 class="target__title">ДЛЯ <span class="target__title-accent">КОГО</span> ЦЕЙ ПРОЄКТ</h2>
                    <p class="target__subtitle">
                        Наші програми розроблені для різних категорій людей, незалежно від їхнього досвіду та підготовки. Кожен знайде програму, яка відповідає саме
                        його потребам.
                    </p>
                </div>
            </div>

            <div class="target__selector" data-aos="fade-up">
                <button 
                    v-for="(group, index) in targetGroups" 
                    :key="`tab-${index}`"
                    :class="['target__selector-button', { 'active': selectedGroup === index }]"
                    @click="selectGroup(index)">
                    {{ group.title }}
                </button>
            </div>

                <div :key="selectedGroup" class="target__main-card" data-aos="zoom-in" ref="mainCardRef">
                    <div class="target__main-content">
                        <div class="target__main-icon">
                            <component :is="targetGroups[selectedGroup].icon" />
                        </div>
                        <h3 class="target__main-title">{{ targetGroups[selectedGroup].title }}</h3>
                        <p class="target__main-description">{{ targetGroups[selectedGroup].description }}</p>

                        <div class="target__benefits">
                            <div
                                v-for="(benefit, i) in targetGroups[selectedGroup].benefits"
                                :key="i"
                                class="target__benefit"
                                :data-aos="'fade-right'"
                                :data-aos-delay="i * 100">
                                <Icon
                                    name="lucide:check-circle"
                                    size="22"
                                    class="target__benefit-icon" />
                                <p class="target__benefit-text">{{ benefit }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="target__main-image">
                        <img :src="targetGroups[selectedGroup].image" :alt="targetGroups[selectedGroup].title">
                        <div class="target__image-overlay"></div>
                    </div>
                </div>

            <div class="target__grid" data-aos="fade-up">
                <div
                    v-for="(group, index) in targetGroups"
                    :key="`card-${index}`"
                    :class="['target__card', { 'active': selectedGroup === index }]"
                    @click="selectGroup(index)"
                    :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
                    :data-aos-delay="index * 100">
                    <div class="target__card-icon">
                        <component :is="group.icon" />
                    </div>
                    <h3 class="target__card-title">{{ group.title }}</h3>
                    <p class="target__card-description">{{ group.shortDescription }}</p>
                    <span class="target__card-more">
                        {{ selectedGroup === index ? 'Згорнути' : 'Детальніше' }}
                        <Icon
                            :name="selectedGroup === index ? 'lucide:chevron-up' : 'lucide:chevron-right'"
                            size="16"
                            class="target__card-icon-arrow" />
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import CivilianIcon from '~/components/Icons/CivilianIcon.vue';
import OutdoorIcon from '~/components/Icons/OutdoorIcon.vue';
import WarriorIcon from '~/components/Icons/WarriorIcon.vue';
import CorporateIcon from '~/components/Icons/CorporateIcon.vue';

const selectedGroup = ref(0);
const mainCardRef = ref<HTMLElement | null>(null);

const targetGroups = [
    {
        title: "ЦИВІЛЬНІ ОСОБИ",
        shortDescription: "Навички самозахисту та виживання для повсякденного життя.",
        description: "Для всіх, хто хоче бути готовим до надзвичайних ситуацій у повсякденному житті та захистити себе і своїх близьких.",
        icon: CivilianIcon,
        image: "/images/mission.webp",
        benefits: [
            "У тебе є потреба у перезавантаженні та нових враженнях",
            "Прийняв рішення відірвати свою 5ту точку, і як слід струснутися від рутинного та пасивного життя",
            "Інший погляд на проживання свого життя, який змінює ставлення до звичних речей",
            "Отримаєш знання, яким навчають: військових, рятувальників, туристів та альпіністів",
        ]
    },
    {
        title: "ЛЮБИТЕЛІ АКТИВНОГО ВІДПОЧИНКУ",
        shortDescription: "Виживання в дикій природі та екстремальних умовах.",
        description: "Для туристів, альпіністів та любителів природи, які хочуть навчитись виживати в дикій природі та екстремальних умовах.",
        icon: OutdoorIcon,
        image: "/images/mission.webp",
        benefits: [
            "Прагнеш кинути собі виклик і перевірити себе на міцність",
            "Спільні сходження в гори, поїздки на скали, походи різної інтенсивності",
            "Підвищення живучості та особистої ефективності через проходження програм різного рівня складності",
            "Тобі потрібен жорсткий екстрим"
        ]
    },
    {
        title: "ВІЙСЬКОВІ ТА ПРАВООХОРОНЦІ",
        shortDescription: "Спеціальні навички для професійних силовиків.",
        description: "Спеціальні курси для військових, поліцейських та інших силовиків, які потребують додаткових навичок для своєї роботи.",
        icon: WarriorIcon,
        image: "/images/mission.webp",
        benefits: [
            "Тактична медицина на полі бою", 
            "Виживання в умовах бойових дій", 
            "Розширені техніки самозахисту", 
            "Тактичне планування та дії у команді"
        ]
    },
    {
        title: "КОРПОРАТИВНІ КОМАНДИ",
        shortDescription: "Розвиток командної роботи та лідерства.",
        description: "Для компаній, які прагнуть розвинути навички командної роботи, лідерства та стресостійкості своїх співробітників.",
        icon: CorporateIcon,
        image: "/images/mission.webp",
        benefits: [
            "Командоутворення через екстремальні випробування",
            "Розвиток лідерських якостей",
            "Управління стресом та прийняття рішень під тиском",
            "Вміння брати на себе відповідальність і ставати сильним гравцем у команді"
        ]
    }
];

const stats = [
    { value: 5000, title: "Успішних випускників", unit: "+" },
    { value: 92, title: "Рівень задоволеності", unit: "%" },
    { value: 25, title: "Програм навчання", unit: "" },
    { value: 7, title: "Років досвіду", unit: "" }
];


const selectGroup = (index: number) => {
    selectedGroup.value = index;
    
    nextTick(() => {
        if (mainCardRef.value) {
            const elementRect = mainCardRef.value.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            
            const offset = 130;
            
            window.scrollTo({
                top: absoluteElementTop - offset,
                behavior: 'smooth'
            });
        }
    });
};
</script>

<style lang="scss" scoped>
.target {
    padding: 80px 0;
    background-color: #0a0a0a;
    position: relative;
    overflow: hidden;

    &__container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    &__header {
        text-align: center;
        margin-bottom: 64px;
    }

    &__title {
        font-size: 38px;
        color: white;
        margin-bottom: 24px;
        text-transform: uppercase;
        letter-spacing: 1px;
        position: relative;
        display: inline-block;

        @media (min-width: 768px) {
            font-size: 42px;
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

    &__selector {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
        margin-bottom: 40px;
        
        @media (max-width: 768px) {
            display: none;
        }
        
        &-button {
            padding: 12px 20px;
            border: 1px solid rgba($accent, 0.3);
            background: transparent;
            color: #d1d1d1;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s ease;
            
            &:hover {
                border-color: $accent;
                color: white;
                background: rgba($accent, 0.1);
            }
            
            &.active {
                background: $accent;
                border-color: $accent;
                color: white;
            }
        }
    }
    
    &__main-card {
        display: flex;
        background: linear-gradient(135deg, #1a1a1a 0%, #242424 100%);
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 48px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        
        @media (max-width: 768px) {
            flex-direction: column-reverse;
        }
    }
    
    &__main-content {
        flex: 1;
        padding: 40px;

        @media screen and (max-width: 768px) {
            padding: 24px;
        }
    }
    
    &__main-icon {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba($accent, 0.1);
        border-radius: 12px;
        margin-bottom: 24px;
        color: $accent;
    }
    
    &__main-title {
        font-family: "Russo One", sans-serif;
        font-size: 28px;
        color: white;
        margin-bottom: 16px;
    }
    
    &__main-description {
        color: #d1d1d1;
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 32px;
    }
    
    &__main-image {
        flex: 1;
        position: relative;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
        
        .target__image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #0a0a0a 0%, transparent 100%);
            
            @media (max-width: 768px) {
                background: linear-gradient(0deg, #0a0a0a 0%, transparent 100%);
            }
        }
    }
    
    &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        overflow-x: hidden;

        @media (min-width: 992px) {
            grid-template-columns: repeat(4, 1fr);
        }
        
        @media (max-width: 576px) {
            grid-template-columns: 1fr;
        }
    }

    &__card {
        background: linear-gradient(145deg, #1a1a1a, #222);
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        border-left: 4px solid transparent;
        transition: all 0.3s ease;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: $accent;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 0;
        }

        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-left-color: $accent;
            
            .target__card-icon {
                background-color: white;
                color: $accent;
            }
            
            .target__card-title {
                color: $accent;
            }
        }
        
        &.active {
            border-left-color: $accent;
            background: linear-gradient(145deg, darken($accent, 30%), darken($accent, 35%));
            transform: translateY(-8px);
            
            .target__card-icon {
                background-color: white;
                color: $accent;
            }
            
            .target__card-title,
            .target__card-description,
            .target__card-more {
                color: white;
            }
        }
    }

    &__card-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba($accent, 0.1);
        color: $accent;
        border-radius: 10px;
        margin-bottom: 20px;
        transition: all 0.3s ease;
        position: relative;
        z-index: 1;
    }

    &__card-title {
        font-family: "Russo One", sans-serif;
        font-size: 18px;
        color: white;
        margin-bottom: 12px;
        position: relative;
        z-index: 1;
        transition: color 0.3s ease;
    }

    &__card-description {
        color: #a0a0a0;
        font-size: 14px;
        margin-bottom: 16px;
        position: relative;
        z-index: 1;
        transition: color 0.3s ease;
    }
    
    &__card-more {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        color: $accent;
        position: relative;
        z-index: 1;
        transition: color 0.3s ease;
        
        .target__card-icon-arrow {
            margin-left: 6px;
            transition: transform 0.3s ease;
        }
    }

    &__benefits {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 32px;
    }

    &__benefit {
        display: flex;
        align-items: flex-start;
        background: rgba(255, 255, 255, 0.03);
        padding: 16px;
        border-radius: 8px;
        transition: all 0.3s ease;
        
        &:hover {
            background: rgba(255, 255, 255, 0.06);
            transform: translateX(5px);
        }
    }

    &__benefit-icon {
        color: $accent;
        margin-right: 16px;
        margin-top: 3px;
        flex-shrink: 0;
    }

    &__benefit-text {
        color: #f0f0f0;
        font-size: 15px;
        line-height: 1.5;
    }
}
</style>