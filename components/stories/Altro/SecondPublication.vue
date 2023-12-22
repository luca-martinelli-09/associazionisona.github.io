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
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#E1ECC8] to-[#C4D7B2]"
    title="Your Attack Is Too DUMB: Formalizing Attacker Scenarios for Adversarial Transferability" :small-title="true"
    :technologies="['Security and privacy', 'Systems security', 'Argument Retrieval']">

    <template v-slot:before>
      <h3 class="vsmall mb-10">Pubblicazioni</h3>
    </template>

    <template v-slot:description>
      <h3 class="vsmall">
        Proceedings of the 26th International Symposium on Research in Attacks, Intrusions and Defenses
      </h3>
    </template>

    <template v-slot:widget>
      <StoryWidget href="https://dl.acm.org/doi/pdf/10.1145/3607199.3607227" type="small">
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