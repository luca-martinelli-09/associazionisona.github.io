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
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#007EC5] to-[#006faf]" text-color="white"
    title="Avis del Colognese" image="avisdelcolognese.webp" :technologies="['PHP', 'MySQL', 'Javascript/CSS']">

    <template v-slot:description>
      <p>Sito web dell'Avis del Colognese (Cologna Veneta), con un'area riservata da cui poter gestire gli articoli e, per
        i donatori, vedere le proprie donazioni effettuate.</p>
    </template>

    <template v-slot:widget>
      <StoryWidget href="https://avisdelcolognese.it">
        <Icon icon="carbon:link" class="text-red-600" />
        <span>Avis del Colognese</span>
      </StoryWidget>
    </template>

  </StoryTemplate>
</template>