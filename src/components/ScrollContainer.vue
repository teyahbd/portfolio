<template>
  <main
    class="scroll-container"
    v-on:scroll="() => throttle(handleScroll, 500)"
  >
    <PageComponent v-for="page in pages" :key="page" :isScrollPage="true" />
  </main>
</template>

<script setup lang="ts">
import { usePageStore } from "../store/page";
import { computed } from "vue";
import PageComponent from "./PageComponent.vue";

const pageStore = usePageStore();

const pages: string[] = ["page 1", "page 2", "page 3"];

const scrollPageHeight = computed(() => Math.floor(window.innerHeight * 0.9));

const pageHeights = computed(() => [
  0,
  scrollPageHeight.value / 2,
  scrollPageHeight.value * 1.5,
]);

// turn into hook?
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
  } else if (currentPosition >= pageSizes[2]) {
    pageStore.updatePage(2);
  }
};
</script>

<style scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}
</style>
