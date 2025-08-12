<template>
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div class="modal" @click.stop>
            <div class="modal__header">
                <h3 class="modal__title">ЗАЛИШИЛИСЬ ПИТАННЯ?</h3>
                <button class="modal__close" @click="closeModal">
                    <Icon name="lucide:x" size="24" />
                </button>
            </div>
            
            <div class="modal__body">
                <p class="modal__description">
                    Залиште свої контактні дані та питання, і ми зв'яжемося з вами найближчим часом
                </p>
                
                <form @submit.prevent="submitForm" class="modal__form">
                    <div class="form-group">
                        <label for="name" class="form-label">Ім'я *</label>
                        <input
                            id="name"
                            v-model="form.name"
                            type="text"
                            class="form-input"
                            placeholder="Введіть ваше ім'я"
                            required
                        />
                        <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone" class="form-label">Телефон *</label>
                        <input
                            id="phone"
                            v-model="form.phone"
                            @input="formatPhone"
                            type="tel"
                            class="form-input"
                            placeholder="+38 (0XX) XXX-XX-XX"
                            maxlength="19"
                            required
                        />
                        <span v-if="errors.phone" class="form-error">{{ errors.phone }}</span>
                    </div>
                    
                    <div class="form-group">
                        <label for="question" class="form-label">Питання</label>
                        <textarea
                            id="question"
                            v-model="form.question"
                            class="form-textarea"
                            placeholder="Опишіть ваше питання"
                            rows="4"
                        ></textarea>
                    </div>
                    
                    <OthersPrimaryButton
                        type="submit"
                        :disabled="isSubmitting"
                        class="modal__submit"
                    >
                        {{ isSubmitting ? 'ВІДПРАВЛЯЄМО...' : 'ВІДПРАВИТИ' }}
                    </OthersPrimaryButton>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    isOpen: boolean
}

interface FormData {
    name: string
    phone: string
    question: string
}

interface FormErrors {
    name?: string
    phone?: string
    question?: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
    close: []
}>()

const form = ref<FormData>({
    name: '',
    phone: '+38',
    question: ''
})

const errors = ref<FormErrors>({})
const isSubmitting = ref(false)

const closeModal = () => {
    emit('close')
    resetForm()
}

const resetForm = () => {
    form.value = {
        name: '',
        phone: '+38',
        question: ''
    }
    errors.value = {}
}

const formatPhone = (event: Event) => {
    const input = event.target as HTMLInputElement
    let value = input.value.replace(/\D/g, '') // Удаляем все нецифровые символы
    
    // Если номер начинается с 380, оставляем как есть
    // Если начинается с 38, добавляем 0
    // Если начинается с других цифр, добавляем 380
    if (value.startsWith('380')) {
        value = value.substring(3)
    } else if (value.startsWith('38')) {
        value = value.substring(2)
    } else if (value.startsWith('0')) {
        value = value.substring(1)
    }
    
    // Ограничиваем длину
    value = value.substring(0, 9)
    
    // Форматируем
    let formatted = '+38'
    if (value.length > 0) {
        formatted += ' (0'
        if (value.length > 0) {
            formatted += value.substring(0, 2)
        }
        formatted += ')'
        if (value.length > 2) {
            formatted += ' ' + value.substring(2, 5)
        }
        if (value.length > 5) {
            formatted += '-' + value.substring(5, 7)
        }
        if (value.length > 7) {
            formatted += '-' + value.substring(7, 9)
        }
    }
    
    form.value.phone = formatted
}

const validateForm = (): boolean => {
    errors.value = {}
    
    if (!form.value.name.trim()) {
        errors.value.name = "Ім'я є обов'язковим полем"
    }
    
    if (!form.value.phone.trim()) {
        errors.value.phone = "Телефон є обов'язковим полем"
    } else if (form.value.phone.length < 19) {
        errors.value.phone = "Невірний формат телефону"
    }
    
    return Object.keys(errors.value).length === 0
}

const submitForm = async () => {
    if (!validateForm()) {
        return
    }
    
    isSubmitting.value = true
    
    try {
        const response = await $fetch('https://n8n.nagrani.life/webhook/website', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                name: form.value.name.trim(),
                phone: form.value.phone,
                question: form.value.question.trim() || 'Немає конкретного питання'
            }
        })
        
        // Показуємо повідомлення про успіх
        if (process.client && (window as any).$toast) {
            (window as any).$toast.success('Ваша заявка успішно відправлена! Ми зв\'яжемося з вами найближчим часом.')
        }
        
        // Закриваємо модальне вікно
        closeModal()
        
    } catch (error) {
        console.error('Помилка при відправці форми:', error)
        
        if (process.client && (window as any).$toast) {
            (window as any).$toast.error('Виникла помилка при відправці заявки. Спробуйте ще раз або зв\'яжіться з нами за телефоном.')
        }
        
    } finally {
        isSubmitting.value = false
    }
}

// Закриття модального вікна при натисканні Escape
const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && props.isOpen) {
        closeModal()
    }
}

onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
})

// Блокування скролу при відкритті модального вікна
watch(() => props.isOpen, (isOpen) => {
    if (isOpen) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})
</script>

<style lang="scss" scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
}

.modal {
    background-color: #1a1a1a;
    border-radius: 12px;
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    border: 1px solid #333;
    
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 24px 0;
        margin-bottom: 20px;
    }
    
    &__title {
        font-family: "Russo One", sans-serif;
        color: white;
        font-size: 20px;
        margin: 0;
    }
    
    &__close {
        background: none;
        border: none;
        color: #a0a0a0;
        cursor: pointer;
        transition: color 0.3s;
        padding: 4px;
        border-radius: 4px;
        
        &:hover {
            color: $accent;
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
    
    &__body {
        padding: 0 24px 24px;
    }
    
    &__description {
        color: #a0a0a0;
        margin-bottom: 24px;
        line-height: 1.5;
    }
    
    &__form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    &__submit {
        margin-top: 8px;
    }
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-label {
    color: white;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 14px;
}

.form-input,
.form-textarea {
    background-color: #0a0a0a;
    border: 2px solid #333;
    border-radius: 8px;
    padding: 12px 16px;
    color: white;
    font-size: 16px;
    transition: border-color 0.3s;
    
    &::placeholder {
        color: #666;
    }
    
    &:focus {
        outline: none;
        border-color: $accent;
    }
    
    &:invalid {
        border-color: #dc3545;
    }
}

.form-textarea {
    resize: vertical;
    min-height: 100px;
    font-family: inherit;
}

.form-error {
    color: #dc3545;
    font-size: 12px;
    margin-top: 4px;
}

// Адаптивные стили
@media (max-width: 768px) {
    .modal {
        margin: 10px;
        max-height: calc(100vh - 20px);
        
        &__header {
            padding: 20px 20px 0;
        }
        
        &__body {
            padding: 0 20px 20px;
        }
        
        &__title {
            font-size: 18px;
        }
    }
}
</style>
