<script setup lang="ts"></script>

<template>
  <Story>
    <template v-slot:story>
      <BirthDate :slide-index="0" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <BachelorDegree :slide-index="1" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <MasterDegree :slide-index="2" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <Associations :slide-index="3" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <WorksFirst :slide-index="4" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <WorksSecond :slide-index="5" />
    </template>
  </Story>
</template>