<template>
  <div
    class="web-container"
    :style="{
      'background-color': themeStore.currentTheme['primary-background-color'],
      color: themeStore.currentTheme['font-color'],
    }"
  >
    <HeaderContainer :isMobile="false" />
    <ScrollContainer class="scroll" />
  </div>
</template>

<script setup lang="ts">
import ScrollContainer from "./ScrollContainer.vue";
import { useThemeStore } from "../store/theme";
import HeaderContainer from "./HeaderContainer.vue";
const themeStore = useThemeStore();
</script>

<style scoped>
.web-container {
  height: 100%;
  width: 100%;
}
.scroll {
  height: 88vh;
}
</style>
