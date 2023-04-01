<template>
  <main class="scroll-container" v-on:scroll="handleScroll">
    <ScrollPage
      v-for="page in pages"
      :page="page"
      :key="page"
      id="ScrollPage"
    />
  </main>
</template>

<script setup lang="ts">
import ScrollPage from "./ScrollPage.vue";
import { usePageStore } from "../store/page";
import { computed } from "vue";

const pageStore = usePageStore();

const pages: string[] = ["page 1", "page 2", "page 3"];

const scrollPageHeight = computed(() => Math.floor(window.innerHeight * 0.9));

const pageHeights = computed(() => [
  0,
  scrollPageHeight.value,
  scrollPageHeight.value * 2,
]);

console.log(pageHeights.value[2]);

function handleScroll() {
  const currentPosition =
    document.getElementsByClassName("scroll-container")[0].scrollTop;

  // make this better later

  if (currentPosition < pageHeights.value[1]) {
    pageStore.updatePage(0);
  } else if (currentPosition < pageHeights.value[2]) {
    pageStore.updatePage(1);
  } else if (currentPosition >= pageHeights.value[2]) {
    pageStore.updatePage(2);
  }
}
</script>

<style scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

@media only screen and (max-width: 768px) {
  .scroll-container {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    flex-direction: row;
  }
}
</style>
