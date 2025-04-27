<template>
    <button class="primary-button">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.primary-button {
    display: inline-block;
        padding: 14px 32px;
        background-color: $accent;
        color: white;
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
</style>