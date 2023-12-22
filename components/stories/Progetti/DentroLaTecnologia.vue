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
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#52DE97] to-[#52ded7]"
    title="INSiDER - Dentro la Tecnologia" image="dentrolatecnologia.webp"
    :technologies="['PHP', 'MySQL', 'Javascript/CSS']">

    <template v-slot:description>
      <p><strong>INSiDER - Dentro la Tecnologia</strong> è un podcast settimanale che parla della nostra prospettiva sul
        mondo della tecnologia del ventunesimo secolo.</p>
    </template>

    <template v-slot:widget>
      <StoryWidget href="https://dentrolatecnologia.it">
        <Icon icon="carbon:link" class="text-green-600" />
        <span>INSiDER</span>
      </StoryWidget>
    </template>

  </StoryTemplate>
</template>