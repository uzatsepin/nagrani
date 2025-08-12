<template>
    <Teleport to="body">
        <div v-if="notifications.length > 0" class="toast-container">
            <TransitionGroup name="toast" tag="div">
                <div
                    v-for="notification in notifications"
                    :key="notification.id"
                    :class="[
                        'toast',
                        `toast--${notification.type}`
                    ]"
                >
                    <Icon
                        :name="getIcon(notification.type)"
                        size="20"
                        class="toast__icon"
                    />
                    <span class="toast__message">{{ notification.message }}</span>
                    <button
                        class="toast__close"
                        @click="removeNotification(notification.id)"
                    >
                        <Icon name="lucide:x" size="16" />
                    </button>
                </div>
            </TransitionGroup>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
interface Notification {
    id: string
    type: 'success' | 'error' | 'info'
    message: string
}

const notifications = ref<Notification[]>([])

const getIcon = (type: Notification['type']) => {
    const icons: Record<Notification['type'], string> = {
        success: 'lucide:check-circle',
        error: 'lucide:alert-circle',
        info: 'lucide:info'
    }
    return icons[type] || icons.info
}

const addNotification = (type: Notification['type'], message: string) => {
    const id = Date.now().toString()
    notifications.value.push({ id, type, message })
    
    // Автоматически удаляем уведомление через 5 секунд
    setTimeout(() => {
        removeNotification(id)
    }, 5000)
}

const removeNotification = (id: string) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
        notifications.value.splice(index, 1)
    }
}

// Экспортируем функции для использования в других компонентах
defineExpose({
    addNotification
})

// Глобальные функции для удобства
const toast = {
    success: (message: string) => addNotification('success', message),
    error: (message: string) => addNotification('error', message),
    info: (message: string) => addNotification('info', message)
}

// Делаем toast доступным глобально
if (process.client) {
    (window as any).$toast = toast
}
</script>

<style lang="scss" scoped>
.toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 400px;
    
    @media (max-width: 768px) {
        top: 10px;
        right: 10px;
        left: 10px;
        max-width: none;
    }
}

.toast {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid transparent;
    
    &--success {
        background-color: rgba(34, 197, 94, 0.9);
        border-color: rgba(34, 197, 94, 0.3);
    }
    
    &--error {
        background-color: rgba(239, 68, 68, 0.9);
        border-color: rgba(239, 68, 68, 0.3);
    }
    
    &--info {
        background-color: rgba(59, 130, 246, 0.9);
        border-color: rgba(59, 130, 246, 0.3);
    }
    
    &__icon {
        flex-shrink: 0;
    }
    
    &__message {
        flex: 1;
        line-height: 1.4;
    }
    
    &__close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        opacity: 0.8;
        transition: opacity 0.2s, background-color 0.2s;
        
        &:hover {
            opacity: 1;
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
}

// Анимации
.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}

.toast-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.toast-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

.toast-move {
    transition: transform 0.3s ease;
}
</style>
