<template>
  <header>
    <h1 class="web">{{ pageStore.currentWebPageName.toUpperCase() }}</h1>
    <h1 class="mobile">{{ pageStore.currentMobilePageName.toUpperCase() }}</h1>
    <div class="buttons">
      <SocialButtons />
      <ToggleSelector />
    </div>
  </header>
</template>

<script setup lang="ts">
import SocialButtons from "./SocialButtons.vue";
import ToggleSelector from "./ToggleSelector.vue";
import { usePageStore } from "../../store/page";

const pageStore = usePageStore();
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
  position: absolute;
  height: 10vh;
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

.web {
  display: block;
}

.mobile {
  display: none;
}

.buttons {
  display: flex;
  width: fit-content;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  .web {
    display: none;
  }
  .mobile {
    display: block;
  }
  .buttons {
    gap: 1rem;
  }
}
</style>
