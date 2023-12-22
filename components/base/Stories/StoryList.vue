<script setup lang="ts">
import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { inject, onMounted, ref, type Ref } from 'vue';
import { bus } from '~/composables/bus';

const currentPercentage = ref(0);

const props = defineProps({
  listId: {
    type: String,
    required: true
  }
})

const listId = 'story-list-' + props.listId;
const currentSlideIndex = inject<Ref<number>>('currentSlide')

let swiper: Swiper;

onMounted(() => {
  swiper = new Swiper(`#${listId}`, {
    modules: [Autoplay, Pagination],
    effect: 'cards',
    allowTouchMove: false,
    autoplay: {
      delay: 15 * 1000,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
      renderBullet: function (index, className) {
        return `<span data-index='${index}' class='${className}'><i class='progress'></i></span>`;
      }
    },
    rewind: false
  });

  swiper.on('autoplayTimeLeft', (swiper, timeLeft, percentage) => {
    currentPercentage.value = Math.min(100, (1 - percentage) * 100);

    updateBulletFill(swiper, currentPercentage.value);
  })

  swiper.on('slideChange', (swiper) => {
    bus.emit('slideChange', { listId, swiper })

    updateBulletFill(swiper)
  })

  function updateBulletFill(swiper: Swiper, percentage: number = 0) {
    if (currentSlideIndex) currentSlideIndex.value = swiper.activeIndex;

    const swiperBullets = document.querySelectorAll(`#${listId} .swiper-pagination-bullet`);
    if (!swiperBullets || swiperBullets.length <= 0) return

    swiperBullets.forEach((swiperBullet) => {
      if (!swiperBullet) return

      const swiperBulletEl = swiperBullet as HTMLElement;
      const progress = swiperBullet.querySelector('.progress') as HTMLElement;

      if (swiperBulletEl.dataset['index'] && parseInt(swiperBulletEl.dataset['index']) < swiper.activeIndex)
        progress.style.width = '100%';
      else if (swiperBulletEl.dataset['index'] && parseInt(swiperBulletEl.dataset['index']) === swiper.activeIndex)
        progress.style.width = percentage + '%';
      else
        progress.style.width = '0%';
    })
  }
})

const slideClick = (e: MouseEvent) => {
  if (!e.currentTarget || !e.target) return
  const slide = e.currentTarget as HTMLElement

  const whitelistTagNames = ['A', 'BUTTON']
  const realTarget = (e.target as HTMLElement)
  if (whitelistTagNames.includes(realTarget.tagName) || realTarget?.parentElement && whitelistTagNames.includes(realTarget.parentElement.tagName)) return

  const rect = slide.getBoundingClientRect();
  const position = ((e.clientX - rect.left) / rect.width) * 100;

  if (position < 50) swiper?.slidePrev()
  else swiper?.slideNext()
}
</script>

<template>
  <div class="max-w-screen-sm w-screen">
    <div class="swiper rounded-2xl overflow-hidden" :id="listId" v-on:click="slideClick">
      <div class="swiper-wrapper">
        <slot name="stories"></slot>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.swiper {
  @apply max-h-screen aspect-[9/16] relative;
}

.swiper-pagination {
  @apply absolute inset-x-0 z-10;
  @apply bottom-auto top-5 flex flex-row justify-between px-5 gap-1;
}
</style>

<style lang="postcss">
.swiper .swiper-pagination-bullet {
  @apply bg-black bg-opacity-40 flex-1 rounded-full h-1 relative;
}

.swiper .swiper-pagination-bullet .progress {
  @apply bg-white absolute inset-y-0 left-0 rounded-full;
}
</style>