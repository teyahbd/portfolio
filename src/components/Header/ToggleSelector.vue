<template>
  <input
    type="checkbox"
    @change="onChange"
    :checked="themeStore.currentThemeName === 'dark'"
  />
</template>

<script setup lang="ts">
import { useThemeStore } from "../../store/theme";

const themeStore = useThemeStore();

function onChange() {
  themeStore.changeTheme();
}
</script>

<style scoped></style>
