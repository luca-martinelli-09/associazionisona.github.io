<script setup lang="ts"></script>

<template>
  <Story>
    <template v-slot:story>
      <Eventa :slide-index="0" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <IntesaVincente :slide-index="1" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <BandaDiSona :slide-index="2" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <ParrocchiaDiLugagnano :slide-index="3" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <DentroLaTecnologia :slide-index="4" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <DigitalPeople :slide-index="5" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <AvisDelColognese :slide-index="6" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <SplitGram :slide-index="7" />
    </template>
  </Story>

  <Story>
    <template v-slot:story>
      <Pomodorino :slide-index="8" />
    </template>
  </Story>
</template>