<template>
  <div
    class="text-container"
    :style="{ color: themeStore.currentTheme['accent-color'] }"
  >
    <p>
      Hi! I'm <span>Teyah</span>. I'm a software developer. I started my journey
      in tech with the <span>Northcoders</span> Software Development bootcamp
      and I'm currently a <span>Front End Software Engineer</span> with
      <span>Rolls Royce</span>.
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useThemeStore } from "../store/theme";

const props = defineProps<{
  text: string;
}>();

const themeStore = useThemeStore();
</script>

<style scoped>
.text-container {
  height: 60vh;
  width: 40vw;
  background-color: white;
  border-radius: 2rem;
  padding: 2rem;
  font-size: 2rem;
  font-family: "Manrope", sans-serif;
  vertical-align: top;
}
</style>
