<template>
  <div
    class="page-container"
    :style="{
      'background-color': themeStore.currentTheme['primary-background-color'],
      color: themeStore.currentTheme['font-color'],
    }"
  >
    <div class="header">
      <HeaderContainer />
    </div>
    <div class="scroll">
      <ScrollContainer />
    </div>
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

.scroll {
  height: 88vh;
}

.header {
  height: 12vh;
}
</style>
