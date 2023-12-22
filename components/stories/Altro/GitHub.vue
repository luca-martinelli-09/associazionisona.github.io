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
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#121b22] to-[#121b22]" text-color="white"
    title="GitHub">

    <template v-slot:description>
      <p>
        Credo fermamente nella filosofia Open Source e dai contributi che tutta la comunità del software libero può
        portare alla società. Sul mio profilo GitHub pubblico tutti i miei progetti, liberamente e gratuitamente
        accessibili.
      </p>
    </template>

    <template v-slot:widget>
      <img
        src="https://github-readme-streak-stats.herokuapp.com?user=luca-martinelli-09&theme=whatsapp-dark&hide_border=true&locale=it"
        alt="GitHub Streak" class="w-full mt-16" />
    </template>

    <template v-slot:after>
      <div class="absolute inset-x-0 bottom-5 lg:bottom-10 flex justify-center">
        <StoryWidget href="https://github.com/luca-martinelli-09" type="small">
          <Icon icon="carbon:link" class="text-neutral-700" />
          <span>GitHub</span>
        </StoryWidget>
      </div>
    </template>

  </StoryTemplate>
</template>