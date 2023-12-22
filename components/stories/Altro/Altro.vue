<script setup lang="ts"></script>

<template>
  <Story>
    <template v-slot:story>
      <GitHub :slide-index="0" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <FirstPublication :slide-index="1" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <SecondPublication :slide-index="2" />
    </template>
  </Story>
</template>