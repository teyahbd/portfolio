<template>
  <div class="scroll-container">
    <ScrollPage v-for="page in pages" :page="page" :key="page" />
  </div>
</template>

<script setup lang="ts">
import ScrollPage from "./components/ScrollPage.vue";

const pages: string[] = ["page 1", "page 2", "page 3"];

// this probably shouldnt be in app - extract out later
</script>

<style scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  border: 1px solid red;
  overflow-x: auto;
  scroll-snap-type: y mandatory;
}
</style>
