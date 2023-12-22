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
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#240041] to-[#22003d]" text-color="white"
    title="Banda di Sona" image="bandadisona.webp" :technologies="['PHP', 'MySQL', 'Javascript/CSS']">

    <template v-slot:description>
      <p>Sito web del Corpo Bandistico di Sona, con un'area riservata da cui poter gestire la Scuola di Musica (iscritti,
        maestri, pagamenti, ecc.) e i soci (tesseramento, verbali, informazioni riservate, ecc.).</p>
    </template>

    <template v-slot:widget>
      <StoryWidget href="https://bandadisona.it">
        <Icon icon="carbon:link" class="text-red-800" />
        <span>Banda di Sona</span>
      </StoryWidget>
    </template>

  </StoryTemplate>
</template>