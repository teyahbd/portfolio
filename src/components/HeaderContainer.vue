<template>
  <header>
    <h1 class="web">{{ pageStore.currentPageName.toUpperCase() }}</h1>
    <h1 class="mobile">TEYAH BD</h1>
    <div class="buttons">
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
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  background-color: rgba(255, 204, 0, 0.866);
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
  width: 10vw;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  .web {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
