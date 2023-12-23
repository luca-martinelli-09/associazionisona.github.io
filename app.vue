<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
  <header>
    <nav>
      <a href="mailto:martinelliluca98@gmail.com" class="iconed">
        <Icon class="text-3xl" icon="mdi:email-outline" />
        <span class="text-xl hidden sm:block">
          martinelliluca98@gmail.com
        </span>
      </a>
      <div class="flex flex-row items-center gap-3 text-3xl">
        <a href="https://github.com/luca-martinelli-09" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" />
        </a>
        <a href="https://www.instagram.com/luca.martinelli.09" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:instagram" />
        </a>
        <a href="https://www.linkedin.com/in/luca-martinelli" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:linkedin" />
        </a>
        <a href="https://www.reddit.com/user/martinelli_luca" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:reddit" />
        </a>
      </div>
    </nav>
  </header>

  <NuxtPage />

  <footer class="flex flex-col justify-start py-7 px-5 bg-neutral-950 border-t border-neutral-800 text-neutral-300">
    <div class="mx-auto w-full max-w-screen-2xl">
      <p>
        Questo sito non utilizza cookie di profilazione, ma si avvale di cookie tecnici necessari al suo funzionamento.
      </p>
      <p>
        Questo sito non raccoglie alcun tipo di dato. <a href="/privacy" class="font-bold">Leggi l'informativa sulla privacy</a>.
      </p>
    </div>
  </footer>
</template>