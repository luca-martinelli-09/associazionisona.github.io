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
const content1 = ref()
const content2 = ref()
const tag1 = ref()
const tag2 = ref()

onMounted(() => {
  animeInst.add({
    targets: title.value,
    translateY: [100, 0],
    duration: 750,
  }).add({
    targets: content1.value,
    opacity: [0, 1],
    translateY: [100, 0],
    duration: 750
  }).add({
    targets: tag1.value,
    opacity: [0, 1],
    translateY: [100, 0],
    duration: 750,
  }, '-=250').add({
    targets: content2.value,
    opacity: [0, 1],
    translateY: [100, 0],
    duration: 750
  }).add({
    targets: tag2.value,
    opacity: [0, 1],
    translateY: [100, 0],
    duration: 750,
  }, '-=250')
})

bus.on('slideChange', ({ listId, swiper }) => {
  if (swiper.activeIndex === props.slideIndex) animeInst.restart(); animeInst.play()
})
</script>

<template>
  <div class="story-content bg-gradient-to-bl from-[#B3005E] to-[#8B1874]">
    <h2 ref="title">Volontariato</h2>

    <div class="transparent flex flex-col gap-3 mt-5 lg:mt-10" ref="content1">
      <h3 class="small">2004-oggi</h3>
      <h3 class="medium">Corpo Bandistico di Sona</h3>
      <p>Come allievo e musicista dal 2004, <strong>consigliere</strong> nel direttivo dal 2018 e
        <strong>vicepresidente</strong> dal 2021
      </p>
    </div>

    <div class="transparent" ref="tag1">
      <StoryWidget href="https://www.bandadisona.it/" type="small">
        <Icon icon="carbon:link" class="text-red-900" />
        <span>bandadisona.it</span>
      </StoryWidget>
    </div>

    <div class="transparent flex flex-col gap-3 mt-5 lg:mt-20" ref="content2">
      <h3 class="small">2017-oggi</h3>
      <h3 class="medium">AVIS</h3>
      <p>Donatore di sangue</p>
    </div>

    <div class="transparent" ref="tag2">
      <StoryWidget href="https://instagram.com/avis.lugagnano" type="small">
        <Icon icon="carbon:at" class="text-blue-800" />
        <span>avis.lugagnano</span>
      </StoryWidget>
    </div>
  </div>
</template>

<style scoped>
.story-content {
  color: honeydew;
}
</style>