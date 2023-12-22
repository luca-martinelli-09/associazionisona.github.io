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
  }, '-=250')
})

bus.on('slideChange', ({ listId, swiper }) => {
  if (swiper.activeIndex === props.slideIndex) animeInst.restart(); animeInst.play()
})
</script>

<template>
  <div class="story-content bg-gradient-to-bl from-[#FD841F] to-[#E14D2A]">
    <picture>
      <source src="https://www.gruppogaspari.it/build/assets/map-footer.a4dc9e57.png" type="image/webp">
      <img class="absolute -bottom-32 left-32 -right-32 object-cover w-full brightness-50"
        src="https://www.gruppogaspari.it/build/assets/map-footer.a4dc9e57.png" alt="Padova">
    </picture>

    <h2 ref="title">Esperienze</h2>

    <div class="transparent flex flex-col gap-3 mt-5 lg:mt-10" ref="content">
      <h3 class="small">2022-oggi</h3>
      <h3 class="medium">Gruppo Gaspari</h3>
      <p>
        <strong>Sviluppatore</strong> presso <strong>Gruppo Gaspari</strong>, azienda di Bologna che si occupa di
        consulenza per la Pubblica Amministrazione italiana.
      </p>
    </div>

    <div class="transparent" ref="tag">
      <StoryWidget href="https://www.gruppogaspari.it/" type="small">
        <Icon icon="carbon:link" class="text-orange-600" />
        <span>gruppogaspari.it</span>
      </StoryWidget>
    </div>
  </div>
</template>

<style scoped>
.story-content {
  color: aliceblue;
}
</style>