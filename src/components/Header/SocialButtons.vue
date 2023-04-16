<template>
  <a
    href="https://www.linkedin.com/in/teyah-brennen-davies"
    :style="{ color: themeStore.currentTheme['font-color'] }"
    target="_blank"
    ><i
      v-bind:class="
        themeStore.currentThemeName === 'dark'
          ? 'fa fa-brands fa-linkedin linkedin-dark'
          : 'fa fa-brands fa-linkedin linkedin-light'
      "
    ></i
  ></a>
  <a
    href="https://github.com/teyahbd"
    :style="{ color: themeStore.currentTheme['font-color'] }"
    target="_blank"
    ><i
      v-bind:class="
        themeStore.currentThemeName === 'dark'
          ? 'fa fa-brands fa-github github-dark'
          : 'fa fa-brands fa-github github-light'
      "
      id="github"
    ></i
  ></a>
</template>

<script setup lang="ts">
import { useThemeStore } from "../../store/theme";

const themeStore = useThemeStore();
</script>

<style scoped>
i {
  cursor: pointer;
  transition-duration: 0.3s;
  font-size: 2.5rem;
}

.linkedin-light:hover {
  color: #0077b5;
}

.github-light:hover {
  color: black;
}

.github-dark:hover {
  color: white;
}

.linkedin-dark:hover {
  color: #00bbff;
}
</style>
