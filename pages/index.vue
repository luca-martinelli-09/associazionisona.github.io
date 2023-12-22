<script setup lang="ts">
import { computed, reactive } from 'vue';

useSeoMeta({
  ogTitle: 'Luca Martinelli',
  description: "Ciao, sono Luca. Sono nato a Verona nel 1998, e le mie due più grandi passioni sono la musica e l'informatica. Ho conseguito nel 2022 la laurea magistrale in Computer Engineering presso l'Università degli Studi di Padova.",
  ogDescription: "Ciao, sono Luca. Sono nato a Verona nel 1998, e le mie due più grandi passioni sono la musica e l'informatica. Ho conseguito nel 2022 la laurea magistrale in Computer Engineering presso l'Università degli Studi di Padova.",
  ogImage: 'https://lucamartinelli.eu.org/img/luca-martinelli-original.jpeg',
  twitterCard: 'summary_large_image',
})

const stories = reactive({
  whoAmI: false,
  projects: false,
  interests: false,
  other: false,
})

const storiesOpened = computed(() => {
  return stories.whoAmI || stories.projects || stories.interests || stories.other
})
</script>

<template>
  <main class="pt-20" :class="storiesOpened ? 'overflow-hidden h-screen' : ''">
    <picture>
      <source src="/img/luca-martinelli.webp">
      <img class="rounded-tl-[20rem] rounded-tr-[20rem] rounded-b-3xl w-80 aspect-[9/11] object-cover object-top"
        src="/img/luca-martinelli.webp" alt="Luca Martinelli">
    </picture>

    <div class="mt-8 flex flex-col gap-3 items-center">
      <h1 class="text-5xl md:text-6xl lg:text-8xl text-center">Luca Martinelli</h1>
      <h2 class="text-2xl md:text-3xl lg:text-4xl text-center">Sviluppatore full-stack</h2>
    </div>

    <div class="mt-12 md:mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 flex-wrap items-center justify-center">
      <StoryCircle title="Chi sono" icon="fluent-emoji:t-rex"
        backgroundStyle="bg-gradient-to-b from-[#FBF6EE] to-[#FAEED1]" ringColor="#FFF38C"
        @click="stories.whoAmI = true" />

      <StoryCircle title="Progetti" icon="fluent-emoji:whale"
        backgroundStyle="bg-gradient-to-b from-[#190482] to-[#200E3A]" ringColor="#E5D4FF"
        @click="stories.projects = true" />

      <StoryCircle title="Interessi" icon="fluent-emoji:penguin"
        backgroundStyle="bg-gradient-to-b from-[#FFFBF5] to-[#B6FFFA]" ringColor="#B6FFFA"
        @click="stories.interests = true" />

      <StoryCircle title="Altro" icon="fluent-emoji:peacock"
        backgroundStyle="bg-gradient-to-b from-[#ECF9FF] to-[#FFE5F1]" ringColor="#FFBED8"
        @click="stories.other = true" />
    </div>
  </main>

  <StoryGroup v-model:visible="stories.whoAmI" listId="who-am-i">
    <template v-slot:stories>
      <ChiSono />
    </template>
  </StoryGroup>

  <StoryGroup v-model:visible="stories.projects" listId="projects">
    <template v-slot:stories>
      <Progetti />
    </template>
  </StoryGroup>

  <StoryGroup v-model:visible="stories.interests" listId="interests">
    <template v-slot:stories>
      <Interessi />
    </template>
  </StoryGroup>

  <StoryGroup v-model:visible="stories.other" listId="others">
    <template v-slot:stories>
      <Altro />
    </template>
  </StoryGroup>
</template>