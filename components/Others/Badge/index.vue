<template>
  <div class="badge">
    <span class="badge__text">
      <slot />
    </span>
  </div>
</template>

<style lang="scss" scoped>
.badge {
  display: inline-block;
  background-color: #1a1a1a;
  border: 1px solid #374151;
  padding: 4px 16px;
  border-radius: 4px;
  margin-bottom: 24px;

  &__text {
    font-size: 14px;
    font-family: monospace;
    letter-spacing: 0.05em;
    color: #9ca3af;
    text-transform: uppercase;
  }
}
</style>
