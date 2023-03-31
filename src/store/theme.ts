import { defineStore } from "pinia";
import { ref, computed, ComputedRef } from "vue";

export interface Theme {
  "font-color": string;
  "primary-background-color": string;
}

export const useThemeStore = defineStore("theme", () => {
  // --- AVAILABLE THEMES ---
  const dark: Theme = {
    "font-color": "white",
    "primary-background-color": "#000000",
  };
  const light: Theme = {
    "font-color": "black",
    "primary-background-color": "#ff94b9",
  };

  const userDefaultTheme = ref(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const currentThemeName = ref(userDefaultTheme);

  const currentTheme: ComputedRef<Theme> = computed(() => {
    return currentThemeName.value === "dark" ? dark : light;
  });

  return { currentTheme, userDefaultTheme };
});
