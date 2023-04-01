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

const pageStore = usePageStore();

const pages: string[] = ["page 1", "page 2", "page 3"];

const pageHeights = [0, 872, 1744];

console.log(document.getElementById("ScrollPage")?.style.height);

function handleScroll() {
  const currentPosition =
    document.getElementsByClassName("scroll-container")[0].scrollTop;

  if (currentPosition === pageHeights[0]) {
    pageStore.updatePage(0);
  } else if (currentPosition === pageHeights[1]) {
    pageStore.updatePage(1);
  } else if (currentPosition === pageHeights[2]) {
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
