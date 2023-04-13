<template>
  <section class="page-container">
    <ExamplePage1 v-if="props.page === 'page 1'" />
    <ExamplePage2 v-if="props.page === 'page 2'" />
    <ExamplePage3 v-if="props.page === 'page 3'" />
  </section>
</template>

<script setup lang="ts">
import ExamplePage1 from "./ExamplePage1.vue";
import ExamplePage2 from "./ExamplePage2.vue";
import ExamplePage3 from "./ExamplePage3.vue";

import { defineProps } from "vue";

const props = defineProps<{
  page: string;
}>();

console.log(props.page);
</script>

<style scoped>
.page-container {
  min-height: 88vh;
  min-width: 100vw;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  color: inherit;
}
</style>
