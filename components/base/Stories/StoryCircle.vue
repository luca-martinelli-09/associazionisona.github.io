<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';

defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  backgroundStyle: {
    type: String,
    required: false
  },
  ringColor: {
    type: String,
    required: false,
    default: 'white'
  }
})

const emit = defineEmits({
  click: (e: MouseEvent) => { }
})
</script>

<template>
  <div class="flex flex-col items-center gap-4 select-none cursor-pointer" @click="(e) => $emit('click', e)">
    <div
      class="circle w-28 aspect-square rounded-full ring-4 ring-offset-4 ring-offset-neutral-900 ring-white flex items-center justify-center active:scale-90 transition-transform duration-300 ease-in-out"
      :class="(backgroundStyle || '')">
      <Icon class="text-7xl" :icon="icon" />
    </div>
    <span class="font-display font-bold text-2xl">{{ title }}</span>
  </div>
</template>

<style scoped>
.circle {
  --tw-ring-color: v-bind(ringColor) !important;
}
</style>