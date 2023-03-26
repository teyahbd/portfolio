<template>
  <section
    class="page-container"
    v-if="props.page === 'page 1'"
    :style="{
      'background-image': `linear-gradient(${props.theme['secondary-background-color']}, ${props.theme['primary-background-color']})`,
      color: props.theme['font-color'],
    }"
  >
    <h1>{{ props.page }}</h1>
  </section>
  <section
    class="page-container"
    v-else
    :style="{
      'background-color': props.theme['primary-background-color'],
      color: props.theme['font-color'],
    }"
  >
    <h1>{{ props.page }}</h1>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Theme } from "../store/theme";

const props = defineProps<{
  page: string;
  theme: Theme;
}>();
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  border: 1px dashed blue;
  min-width: 100vw;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
</style>
