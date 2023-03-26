import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const userDefaultTheme = ref(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const currentTheme = ref("light");

  return { currentTheme, userDefaultTheme };
});
