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
  <StoryTemplate :slide-index="slideIndex" class="bg-gradient-to-br from-[#2d1418] to-[#2d142c]" text-color="white"
    title="Pomodorino" image="pomodorino.webp" :technologies="['Flutter', 'Firebase']">

    <template v-slot:description>
      <p>Pomodorino è un'applicazione che aiuta a concentrasi, tramite la famosa tecnica "pomodoro". Portando a termine
        una sessione di studio o lavoro, l'utente raccoglierà un simpatico pomodorino da collezionare.</p>
    </template>

    <template v-slot:widget>
      <StoryWidget href="https://play.google.com/store/apps/details?id=com.lucamartinelli.pomodorino">
        <Icon icon="carbon:link" class="text-red-700" />
        <span>Play Store</span>
      </StoryWidget>
    </template>

  </StoryTemplate>
</template>