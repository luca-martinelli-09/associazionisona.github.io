<script setup lang="ts">
import { bus } from "~/composables/bus";
import { Icon } from "@iconify/vue/dist/iconify.js";
import anime from "animejs";
import { onMounted, ref } from "vue";

const props = defineProps({
  slideIndex: {
    type: Number,
    required: true,
    default: 0
  }
})

const animeInst = anime.timeline({
  easing: 'easeOutCubic',
  duration: 2000,
});

const contentRefs = ref();

onMounted(() => {
  contentRefs.value.forEach((element: Node) => {
    animeInst.add({
      targets: element,
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 750,
    })
  });
})

bus.on('slideChange', ({ listId, swiper }) => {
  if (swiper.activeIndex === props.slideIndex) animeInst.restart(); animeInst.play()
})

const interests = [
  {
    icon: 'fluent-emoji:musical-note',
    title: 'Musica',
    description: 'Suono il clarinetto dal 2004 nel Corpo Bandistico di Sona, prima da allievo e ora come musicista amatoriale.'
  },
  {
    icon: 'fluent-emoji:desktop-computer',
    title: 'Tecnologia',
    description: `La scienza e la tecnologia mi affascinano in ogni loro aspetto e cerco di rimanere sempre aggiornato sulle ultime novità del mondo tech e, in particolare, di quello legato all'informatica e allo sviluppo software.`
  },
  {
    icon: 'fluent-emoji:studio-microphone',
    title: 'Podcast',
    description: 'Credo nel podcast come mezzo per rendere più fruibile a tutti la conoscenza e la cultura.',
  }
]
</script>

<template>
  <div class="story-content bg-gradient-to-br from-[#FFE382] to-[#E36414] flex flex-col gap-6 lg:gap-10">
    <div class="transparent flex items-start gap-5" ref="contentRefs" v-for="interest in interests">
      <Icon :icon="interest.icon" class="text-6xl flex-shrink-0" />
      <div class="flex flex-col gap-3">
        <h2 class="medium">
          {{ interest.title }}
        </h2>
        <p>
          {{ interest.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.medium {
  margin-bottom: 0;
}
</style>