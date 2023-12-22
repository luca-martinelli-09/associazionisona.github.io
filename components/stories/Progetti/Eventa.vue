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
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#0066cc] to-[#0066cc]" text-color="white"
    title="Eventa" image="eventa.webp" :technologies="['PHP', 'MySQL', 'Bootstrap Italia', 'React Native']">

    <template v-slot:description>
      <p><strong>Eventa</strong> è una piattaforma online per creare, cercare e prenotarsi ad eventi con un numero
        limitato di posti disponibili.</p>
      <p>Eventa è stata pensata per il Comune di Sona per garantire la prenotazione agli eventi organizzati
        dall'Ente e dalle associazioni durante la pandemia di Covid-19.</p>
      <p>Sul Play Store è presente inoltre l'app Android per poter gestire in modo più rapido le prenotazioni.</p>
    </template>

    <template v-slot:widget>
      <StoryWidget href="https://eventa.sona.eu.org">
        <Icon icon="carbon:link" class="text-blue-600" />
        <span>Eventa</span>
      </StoryWidget>
    </template>

  </StoryTemplate>
</template>