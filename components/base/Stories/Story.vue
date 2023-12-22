<script setup lang="ts"></script>

<template>
  <div class="swiper-slide">
    <slot name="story"></slot>
  </div>
</template>

<style scoped lang="postcss">
.swiper-slide {
  @apply flex items-center justify-center relative;
  @apply bg-neutral-800;
}
</style>