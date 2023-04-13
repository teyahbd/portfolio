<template>
  <div>
    <div
      class="page-container"
      :style="{
        'background-color': themeStore.currentTheme['primary-background-color'],
        color: themeStore.currentTheme['font-color'],
      }"
    >
      <div class="header">
        <HeaderContainer :isMobile="props.isMobile" />
      </div>

      <div class="scroll">
        <ScrollContainer />
      </div>
      <MobileNavBar class="mobile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ScrollContainer from "./ScrollContainer.vue";
import { useThemeStore } from "../store/theme";
import HeaderContainer from "./HeaderContainer.vue";
import MobileNavBar from "./mobile/MobileNavBar.vue";
const themeStore = useThemeStore();

const props = defineProps<{
  isMobile: boolean;
}>();
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
  height: fit-content;
}

.mobile {
  display: none;
}

@media only screen and (max-width: 768px) {
  .mobile {
    display: flex;
  }
}
</style>
