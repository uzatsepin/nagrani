<template>
    <div class="page-title">
        <div class="page-title__content">
            <h2>
                <slot name="title" />
            </h2>
            <p>
                <slot name="subtitle" />
            </p>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.page-title {
    font-size: 32px;
    text-transform: uppercase;
    display: flex;
    align-items: stretch;
    gap: 8px;
    position: relative; 
    
    &:before {
        content: "";
        width: 14px;
        background-color: $accent;
        clip-path: polygon(35% 0%, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 16%);
        display: block;
        align-self: stretch;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h2 {
            font-size: 32px;
        }

        p {
            font-size: 16px;
            color: $gray;
            max-width: 816px;
        }
    }
}
</style>
