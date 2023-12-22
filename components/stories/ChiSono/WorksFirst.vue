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
  <div class="story-content bg-gradient-to-bl from-[#1AACAC] to-[#2E97A7]">
    <h2 ref="title">Esperienze</h2>

    <div class="transparent flex flex-col gap-3 mt-5 lg:mt-10" ref="content1">
      <h3 class="small">2019-oggi</h3>
      <h3 class="medium">Digital People</h3>
      <p>
        <strong>Autore</strong> e <strong>sviluppatore</strong> del network di podcast
        <strong>Digital People</strong>, per divulgare notizie e argomento di tecnologia e intervistare aziende tech.
      </p>
    </div>

    <div class="transparent" ref="tag1">
      <StoryWidget href="https://www.dentrolatecnologia.it/" type="small">
        <Icon icon="carbon:link" class="text-green-600" />
        <span>dentrolatecnologia.it</span>
      </StoryWidget>
    </div>

    <div class="transparent flex flex-col gap-3 mt-5 lg:mt-20" ref="content2">
      <h3 class="small">2022-oggi</h3>
      <h3 class="medium">Apeirons</h3>
      <p>
        <strong>Cofondatore</strong> e <strong>sviluppatore</strong> di <strong>Apeirons</strong>, startup che ha
        l'obiettivo di reinventare i giochi da tavolo unendo il mondo fisico con quello digitale.
      </p>
    </div>

    <div class="transparent" ref="tag2">
      <StoryWidget href="https://apeirons.app" type="small">
        <Icon icon="carbon:link" class="text-blue-800" />
        <span>apeirons.app</span>
      </StoryWidget>
    </div>
  </div>
</template>

<style scoped>
.story-content {
  color: aliceblue;
}
</style>