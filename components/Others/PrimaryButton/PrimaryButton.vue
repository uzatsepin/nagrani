<template>
    <button class="primary-button">
        <slot />
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.primary-button {
    background-color: $accent;
    color: $white;
    font-size: 14px;
    padding: 12px 30px;
    clip-path: polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0% 30%);
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: $buttonHover;
    }
}
</style>