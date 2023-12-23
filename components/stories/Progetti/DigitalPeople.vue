<script setup lang="ts">
import { Icon } from "@iconify/vue/dist/iconify.js";

defineProps({
  slideIndex: {
    type: Number,
    required: true,
    default: 0
  }
})
</script>

<template>
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#1E71B8] to-[#155d9c]" text-color="white"
    title="Digital People" image="digitalpeople.webp" :technologies="['SvelteKit', 'TailwindCSS']">

    <template v-slot:description>
      <p><strong>Digital People</strong> è un network di podcast che parla di tecnologia. Tra i podcast realizzati,
        INSiDER - Dentro la Tecnologia, VisionAlps, Smart City Now e Tech Rewind.</p>
    </template>

    <template v-slot:widget>
      <StoryWidget href="https://digitalpeople.tech">
        <Icon icon="carbon:link" class="text-blue-600" />
        <span>Sito web</span>
      </StoryWidget>
    </template>

  </StoryTemplate>
</template>