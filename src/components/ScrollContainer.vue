<template>
  <main
    class="scroll-container"
    v-on:scroll="() => throttle(handleScroll, 500)"
  >
    <PageContainer :style="{ minHeight: '100vh' }"><h1>Home</h1></PageContainer>
    <PageContainer :style="{ minHeight: '100vh' }"
      ><h1>About</h1></PageContainer
    >
    <PageContainer :style="{ minHeight: '100vh' }"
      ><h1>Stack</h1></PageContainer
    >
    <PageContainer :style="{ minHeight: '400vh' }"
      ><h1>Projects</h1></PageContainer
    >
    <PageContainer :style="{ minHeight: '100vh' }"
      ><h1>Contact</h1></PageContainer
    >
  </main>
</template>

<script setup lang="ts">
import { usePageStore } from "../store/page";
import { computed } from "vue";

const pageStore = usePageStore();

const scrollPageHeight = computed(() => Math.floor(window.innerHeight * 0.9));

const pageHeights = computed(() => [
  0,
  scrollPageHeight.value / 2 +
    pageStore.mobilePageHeightRatios[0] * scrollPageHeight.value,
  scrollPageHeight.value * 1.5 +
    pageStore.mobilePageHeightRatios[1] * scrollPageHeight.value,
  scrollPageHeight.value * 2.5 +
    pageStore.mobilePageHeightRatios[2] * scrollPageHeight.value,
  scrollPageHeight.value * 3.5 +
    pageStore.mobilePageHeightRatios[3] * scrollPageHeight.value,
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

  // only update if not already value
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
</style>
