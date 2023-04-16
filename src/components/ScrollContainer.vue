<template>
  <main
    class="scroll-container"
    v-on:scroll="() => throttle(handleScroll, 500)"
  >
    <ScrollPage
      v-for="page in pageStore.webPages"
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

const scrollPageHeight = computed(() => Math.floor(window.innerHeight * 0.9));

const pageHeights = computed(() => [
  0,
  scrollPageHeight.value / 2,
  scrollPageHeight.value * 1.5,
  scrollPageHeight.value * 2.5,
  scrollPageHeight.value * 3.5,
]);

const scrollPageWidth = computed(() => Math.floor(window.innerWidth));

const pageWidths = computed(() => [
  0,
  scrollPageWidth.value / 2,
  scrollPageWidth.value * 1.5,
]);

// turn into hook
let throttleTimer: boolean;

const throttle = (callback: () => void, time: number) => {
  if (throttleTimer) return;

  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const handleScroll = () => {
  const isMobile = window.innerWidth <= 768;

  const currentPosition = isMobile
    ? document.getElementsByClassName("scroll-container")[0].scrollLeft
    : document.getElementsByClassName("scroll-container")[0].scrollTop;

  const pageSizes = isMobile ? pageWidths.value : pageHeights.value;

  if (currentPosition < pageSizes[1]) {
    pageStore.updatePage(0);
  } else if (currentPosition < pageSizes[2]) {
    pageStore.updatePage(1);
  } else if (currentPosition < pageSizes[3]) {
    pageStore.updatePage(2);
  } else if (currentPosition < pageSizes[4]) {
    pageStore.updatePage(3);
  } else if (currentPosition >= pageSizes[4]) {
    pageStore.updatePage(4);
  }
};
</script>

<style scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  /* scroll-snap-type: y mandatory; */
}

@media only screen and (max-width: 768px) {
  .scroll-container {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    flex-direction: row;
  }
}
</style>
