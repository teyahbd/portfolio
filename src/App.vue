<template>
  <div
    class="page-container web"
    :style="{
      'background-color': themeStore.currentTheme['primary-background-color'],
      color: themeStore.currentTheme['font-color'],
    }"
  >
    <div class="header">
      <HeaderContainer :isMobile="false" />
    </div>
    <div class="scroll">
      <ScrollContainer />
    </div>
  </div>
  <div
    class="mobile"
    :style="{
      'background-color': themeStore.currentTheme['primary-background-color'],
      color: themeStore.currentTheme['font-color'],
    }"
  >
    <HeaderContainer :isMobile="true" />
  </div>
</template>

<script setup lang="ts">
import ScrollContainer from "./components/ScrollContainer.vue";
import { useThemeStore } from "./store/theme";
import HeaderContainer from "./components/HeaderContainer.vue";

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

.web {
  display: block;
}

.mobile {
  display: none;
}

@media only screen and (max-width: 768px) {
  .web {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
