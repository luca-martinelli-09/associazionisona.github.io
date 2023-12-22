<script setup lang="ts">
import anime from "animejs";
import { onMounted, ref } from "vue";
import { bus } from "~/composables/bus";

const props = defineProps({
  slideIndex: {
    type: Number,
    required: true,
    default: 0
  },
  title: {
    type: String,
    required: true,
  },
  smallTitle: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
  },
  textColor: {
    type: String,
    default: 'black',
  },
  technologies: {
    type: Array<String>,
    default: []
  }
})

const animeInst = anime.timeline({
  easing: 'easeOutCubic',
  duration: 2000,
});

const titleRef = ref()
const contentRef = ref()
const tagRef = ref()

onMounted(() => {
  animeInst.add({
    targets: titleRef.value,
    translateY: [100, 0],
    duration: 750,
  }).add({
    targets: contentRef.value,
    opacity: [0, 1],
    translateY: [100, 0],
    duration: 750
  }).add({
    targets: tagRef.value,
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
  <div class="story-content" :class="$attrs['class']">
    <picture v-if="image">
      <source :src="'/img/</picture>' + image" type="image/webp">
      <img class="absolute bottom-0 inset-x-0 object-cover w-full" :src="'/img/' + image" :alt="title">
    </picture>

    <slot name="before"></slot>

    <h2 :class="smallTitle ? 'small' : 'medium'" ref="titleRef">{{ title }}</h2>
    <div class="transparent flex flex-col gap-3" ref="contentRef">
      <slot name="description"></slot>
      <p class="story-pill-containers" v-if="technologies && technologies.length > 0">
        <StoryPillTag v-for="tech in technologies"><span>{{ tech }}</span></StoryPillTag>
      </p>
    </div>

    <div class="transparent mt-5" ref="tagRef">
      <slot name="widget"></slot>
    </div>

    <slot name="after"></slot>
  </div>
</template>

<style scoped>
.story-content {
  color: v-bind(textColor);
}
</style>