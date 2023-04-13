<template>
  <header>
    <h1 v-if="!props.isMobile">
      {{ pageStore.currentWebPageName.toUpperCase() }}
    </h1>
    <h1 class="mobile-header-text" v-if="props.isMobile">
      {{ props.mobilePageHeader }}
    </h1>
    <div class="buttons-and-links">
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
  mobilePageHeader?: string;
}>();
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Changa+One&display=swap");
header {
  width: 100%;
  height: fit-content;
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
.mobile-header-text {
  font-size: 2rem;
}

.buttons-and-links {
  display: flex;
  width: fit-content;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;
}
</style>
