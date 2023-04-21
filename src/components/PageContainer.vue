<template>
  <main
    class="scroll-container"
    v-on:scroll="() => throttle(handleScroll, 500)"
  >
    <HomePage class="page" />
    <AboutPage class="page" />
    <StackPage class="page" />
    <ProjectsPage class="page" />
    <ContactPage class="page" />
  </main>
</template>

<script setup lang="ts">
import { usePageStore } from "../store/page";
import { computed } from "vue";
import StackPage from "./Pages/StackPage.vue";
import AboutPage from "./Pages/AboutPage.vue";
import HomePage from "./Pages/HomePage.vue";
import ContactPage from "./Pages/ContactPage.vue";
import ProjectsPage from "./Pages/ProjectsPage.vue";

const pageStore = usePageStore();

const scrollPageHeight = computed(() => Math.floor(window.innerHeight * 0.9));

const pageHeights = computed(() => [
  0,
  scrollPageHeight.value / 2 +
    (pageStore.mobilePageHeightRatios[0] - 1) * scrollPageHeight.value,
  scrollPageHeight.value * 1.5 +
    (pageStore.mobilePageHeightRatios[1] - 1) * scrollPageHeight.value,
  scrollPageHeight.value * 2.5 +
    (pageStore.mobilePageHeightRatios[2] - 1) * scrollPageHeight.value,
  scrollPageHeight.value * 3.5 +
    (pageStore.mobilePageHeightRatios[3] - 1) * scrollPageHeight.value,
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
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
}

.page {
  min-height: 100vh;
  min-width: 100vw;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  padding: 1rem;
  padding-top: 10vh;
  overflow-x: auto;
}
</style>
