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

const title = ref()
const content = ref()
const tag = ref()

onMounted(() => {
  animeInst.add({
    targets: title.value,
    translateY: [100, 0],
    duration: 750,
  }).add({
    targets: content.value,
    opacity: [0, 1],
    translateY: [100, 0],
    duration: 750
  }).add({
    targets: tag.value,
    opacity: [0, 1],
    translateY: [100, 0],
    duration: 750,
  }, '1000')
})

bus.on('slideChange', ({ listId, swiper }) => {
  if (swiper.activeIndex === props.slideIndex) animeInst.restart(); animeInst.play()
})
</script>

<template>
  <div class="story-content bg-gradient-to-br from-[#FFE3E1] to-[#FFD1D1]">
    <picture>
      <source src="/img/padova.webp" type="image/webp">
      <img class="absolute bottom-0 inset-x-0 object-cover w-full" src="/img/padova.webp" alt="Padova">
    </picture>

    <h2 ref="title">Laurea Triennale</h2>
    <div class="transparent flex flex-col gap-3" ref="content">
      <h3 class="medium">Ingegneria</h3>
      <h3 class="medium">dell'Informazione</h3>
      <h3 class="small mt-3">2017-2020</h3>
    </div>

    <div class="transparent" ref="tag">
      <StoryWidget href="https://www.unipd.it/">
        <Icon icon="carbon:at" class="text-red-900" />
        <span>UniPD</span>
      </StoryWidget>
    </div>

    <div class="absolute inset-x-0 bottom-5 flex flex-col items-center">
      <picture>
        <source src="/img/bachelor-badge.png" type="image/png">
        <img class="w-56" src="/img/bachelor-badge.png"
          alt="Open Badge Laurea Triennale Ingegneria dell'Informazione">
      </picture>
      <StoryWidget href="https://openbadges.bestr.it/public/assertions/983f5rFeRzyeA3slIbskjA" type="small">
        <Icon icon="carbon:link" class="text-blue-500" />
        <span>bestr.it</span>
      </StoryWidget>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>