<template>
  <div class="page-container">
    <h1>{{ props.page }}</h1>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  page: string;
}>();
</script>

<style scoped>
.page-container {
  height: 100vh;
  border: 1px dashed blue;
  width: 100%;
  scroll-snap-align: start;
}
</style>
