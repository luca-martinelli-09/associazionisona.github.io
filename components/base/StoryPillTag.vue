<script setup lang="ts"></script>

<template>
  <div
    class="inline-flex gap-2 bg-white text-neutral-900 rounded-full items-center text-base px-4 py-1"
    v-bind="$attrs">
    <slot></slot>
  </div>
</template>