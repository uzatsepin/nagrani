<template>
  <button class="secondary-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.secondary-button {
  background-color: transparent;
  border: 2px solid #374151;
  padding: 12px 20px;
  color: #fff;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(31, 41, 55, 0.5);
  }
}
</style>
