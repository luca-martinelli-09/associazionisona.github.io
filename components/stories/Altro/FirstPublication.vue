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
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#D0BFFF] to-[#BEADFA]"
    title="Development of an IR System for Argument Search" :small-title="true"
    :technologies="['Information Retrieval', 'Search Engine', 'Argument Retrieval']">

    <template v-slot:before>
      <h3 class="vsmall mb-10">Pubblicazioni</h3>
    </template>

    <template v-slot:description>
      <h3 class="vsmall">CEUR Workshop Proceedings (CEUR-WS.org)</h3>
    </template>

    <template v-slot:widget>
      <StoryWidget href="https://ceur-ws.org/Vol-2936/paper-208.pdf" type="small">
        <Icon icon="carbon:link" class="text-neutral-700" />
        <span>Leggi il paper</span>
      </StoryWidget>
    </template>

    <template v-slot:after>
      <div class="absolute inset-x-0 bottom-5 lg:bottom-10 flex justify-center">
        <StoryWidget href="https://scholar.google.com/citations?user=GVFlmw0AAAAJ&hl=it" type="small">
          <Icon icon="fa6-brands:google-scholar" class="text-blue-500" />
          <span>Google Scholar</span>
        </StoryWidget>
      </div>
    </template>

  </StoryTemplate>
</template>