<script setup lang="ts">
import { bus } from "~/composables/bus";
import { Icon } from "@iconify/vue/dist/iconify.js";
import anime from "animejs";
import { onMounted, reactive, ref } from "vue";

const props = defineProps({
  slideIndex: {
    type: Number,
    required: true,
    default: 0
  }
})

const birthDate = reactive({
  day: 1,
  month: 1,
  year: 1900
});

const months = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];

const animeInst = anime.timeline({
  easing: 'easeOutCubic',
  duration: 2000,
});

const title = ref(null)
const content = ref(null)
const widget = ref(null)

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
    targets: birthDate,
    day: 24,
    month: 9,
    year: 1998,
    round: 1,
  }, '750').add({
    targets: widget.value,
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
  <div class="story-content bg-gradient-to-br from-[#ECEE81] to-[#C3E2C2]">
    <picture>
      <source src="/img/verona.webp" type="image/webp">
      <img class="absolute bottom-0 inset-x-0 object-cover w-full" src="/img/verona.webp" alt="Verona">
    </picture>

    <h2 ref="title">Sono nato il</h2>
    <div class="transparent flex flex-col gap-3" ref="content">
      <h3 class="big">{{ birthDate.day }}</h3>
      <h3 class="medium">{{ months[birthDate.month - 1] }}</h3>
      <h3 class="big">{{ birthDate.year }}</h3>
    </div>

    <div ref="widget" class="transparent">
      <StoryWidget href="https://it.wikipedia.org/wiki/Verona">
        <Icon icon="carbon:location" class="text-violet-600" />
        <span>Verona</span>
      </StoryWidget>
    </div>
  </div>
</template>