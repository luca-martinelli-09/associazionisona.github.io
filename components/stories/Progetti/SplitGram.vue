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
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#4B89D2] to-[#4b6bd2]" text-color="white"
    title="SplitGram" image="splitgram.webp" :technologies="['SvelteKit', 'MongoDB', 'TailwindCSS']">

    <template v-slot:description>
      <p>SplitGram è una webapp per Telegram che permette di gestire e dividere i pagamenti fatti all'interno di un
        gruppo,
        semplificando il numero di transazioni tra i membri.</p>
    </template>

    <template v-slot:widget>
      <StoryWidget href="https://t.me/SplitGram_bot">
        <Icon icon="carbon:link" class="text-blue-600" />
        <span>Telegram</span>
      </StoryWidget>
    </template>

  </StoryTemplate>
</template>