<script setup lang="ts">
withDefaults(defineProps<{
  href: string,
  type?: "small" | "normal"
}>(), {
  type: "normal"
})

</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer"
    class="mt-5 font-display inline-flex gap-2 bg-white text-neutral-900 shadow-2xl rounded-xl items-center transition-transform duration-300 ease-in-out active:scale-90"
    :class="type === 'small' ? 'text-2xl lg:text-3xl px-3 py-1' : 'text-3xl lg:text-4xl px-4 py-2'" v-bind="$attrs">
    <slot></slot>
  </a>
</template>