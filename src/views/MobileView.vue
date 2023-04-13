<template>
  <div
    class="mobile-container"
    :style="{
      'background-color': themeStore.currentTheme['primary-background-color'],
      color: themeStore.currentTheme['font-color'],
    }"
  >
    <HeaderContainer :isMobile="true" />
    <div>page</div>
    <MobileNavBar class="mobile" />
  </div>
</template>

<script setup lang="ts">
import HeaderContainer from "../components/HeaderContainer.vue";
import MobileNavBar from "../components/MobileNavBar.vue";
import { useThemeStore } from "../store/theme";

const themeStore = useThemeStore();
</script>

<style scoped>
.mobile-container {
  height: 100%;
  width: 100%;
}
</style>
