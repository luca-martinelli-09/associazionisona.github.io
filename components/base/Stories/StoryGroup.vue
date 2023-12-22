<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, provide, ref } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
    required: false
  },
  listId: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['update:visible'])

const visibleValue = computed({
  get() {
    return props.visible
  },
  set(value) {
    emit('update:visible', value)
  }
})

const currentSlideIndex = ref(0);
provide('currentSlide', currentSlideIndex)
</script>

<template>
  <Transition name="fade" mode="in-out">
    <div class="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-md"
      v-if="visible" v-on:click="visibleValue = false">

      <button
        class="fixed lg:top-5 bottom-5 lg:bottom-auto lg:right-5 w-14 aspect-square rounded-full bg-white z-50 text-neutral-950 flex items-center justify-center active:scale-90 transition-transform duration-300 ease-in-out"
        v-on:click="visibleValue = false">
        <Icon icon="mdi:close" class="text-xl" />
      </button>

      <div v-on:click="(e) => e.stopPropagation()">
        <StoryList :listId="listId">
          <template v-slot:stories>
            <slot name="stories"></slot>
          </template>
        </StoryList>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="postcss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.swiper {
  @apply max-h-screen aspect-[9/16];
}
</style>