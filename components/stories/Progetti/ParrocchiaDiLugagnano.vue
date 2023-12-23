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
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#cf9b2a] to-[#cf822a]" text-color="white"
    title="Parrocchia di Lugagnano" image="parrocchiadilugagnano.webp"
    :technologies="['PHP', 'MySQL', 'Javascript/CSS', 'TailwindCSS']">

    <template v-slot:description>
      <p>Sito web della Parrocchia di Lugagnano, con un'area riservata da cui poter gestire le attività (iscrizioni al
        grest, catechismo, adolescenti, ecc.), avvisi, eventi e molto altro.</p>
    </template>

    <template v-slot:widget>
      <StoryWidget href="https://parrocchiadilugagnano.it">
        <Icon icon="carbon:link" class="text-violet-700" />
        <span>Sito web</span>
      </StoryWidget>
    </template>

  </StoryTemplate>
</template>