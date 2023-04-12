<template>
  <header v-if="!isMobile">
    <h1>{{ pageStore.currentWebPageName.toUpperCase() }}</h1>

    <div class="buttons">
      <SocialButtons />
      <ToggleSelector />
    </div>
  </header>
  <header v-else>
    <h1 class="mobile-header">TEYAH BD</h1>
    <div class="mobile-buttons">
      <SocialButtons />
      <ToggleSelector />
    </div>
  </header>
</template>

<script setup lang="ts">
import SocialButtons from "./SocialButtons.vue";
import ToggleSelector from "./ToggleSelector.vue";
import { usePageStore } from "../store/page";

const pageStore = usePageStore();

const props = defineProps<{
  isMobile: boolean;
}>();
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Changa+One&display=swap");
header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

h1 {
  font-family: "Changa One", cursive;
  font-size: 3.5rem;
  transition-duration: 0.3s;
}

/* h1:hover,
h1:focus {
  color: red;
} */

.buttons {
  display: flex;
  width: fit-content;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;
}

.mobile-buttons {
  display: flex;
  width: fit-content;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
}

.mobile-header {
  font-size: 2.5rem;
}
</style>
