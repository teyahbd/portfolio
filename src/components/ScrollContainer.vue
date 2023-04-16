<template>
  <main
    class="scroll-container"
    v-on:scroll="() => throttle(handleScroll, 500)"
  >
    <div
      v-for="page in pageStore.webPages"
      :page="page"
      :key="page"
      id="ScrollPage"
      class="page-container"
    ></div>
  </main>
</template>

<script setup lang="ts">
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
  const currentPosition =
    document.getElementsByClassName("scroll-container")[0].scrollTop;

  const pageSizes = pageHeights.value;

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

.page-container {
  min-height: 100vh;
  /* border: 1px dashed blue; */
  min-width: 100vw;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  color: inherit;
}
</style>
