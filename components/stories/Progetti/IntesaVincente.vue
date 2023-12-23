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
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#fcecdd] to-[#ffc0e0]" title="Intesa Vincente"
    image="intesavincente.webp" :technologies="['NodeJS', 'ExpressJS', 'Socket.io', 'TailwindCSS']">

    <template v-slot:description>
      <p>WebApp ispirata all'omonimo gioco del programma televisivo "Reazione a Catena". Tramite i websocket, è possibile
        usare più telefoni connessi e controllare lo stato della partita (tempo, parole, vite, ecc.).</p>
    </template>

    <template v-slot:widget>
      <StoryWidget href="https://intesavincente.lucamartinelli.eu.org">
        <Icon icon="carbon:link" class="text-pink-500" />
        <span>Sito web</span>
      </StoryWidget>
    </template>

  </StoryTemplate>
</template>