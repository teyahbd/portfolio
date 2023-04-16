<template>
  <div
    class="page-container"
    :style="{
      'background-color': themeStore.currentTheme['primary-background-color'],
      color: themeStore.currentTheme['font-color'],
    }"
  >
    <HeaderContainer />
    <ScrollContainer />
  </div>
</template>

<script setup lang="ts">
import ScrollContainer from "./components/ScrollContainer.vue";
import { useThemeStore } from "./store/theme";
import HeaderContainer from "./components/Header/HeaderContainer.vue";

const themeStore = useThemeStore();
</script>

<style scoped>
.page-container {
  height: 100%;
  width: 100%;
  /* border: 1px solid yellow; */
}
</style>
