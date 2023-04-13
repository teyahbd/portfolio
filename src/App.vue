<template>
  <div
    class="app-container"
    :style="{
      'background-color': themeStore.currentTheme['primary-background-color'],
      color: themeStore.currentTheme['font-color'],
    }"
  >
    <router-view />
    <MobileNavBar class="mobile" />
  </div>
</template>

<script setup lang="ts">
import MobileNavBar from "./components/MobileNavBar.vue";
import { useThemeStore } from "./store/theme";

const themeStore = useThemeStore();
</script>

<style scoped>
.mobile {
  display: none;
}

.app-container {
  height: fit-content;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .mobile {
    display: flex;
  }
}
</style>
