<template>
  <section class="page-container">
    <h1>{{ props.page }}</h1>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  page: string;
}>();
</script>

<style scoped>
.page-container {
  min-height: 90vh;
  /* border: 1px dashed blue; */
  min-width: 100vw;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  color: inherit;
}
</style>
