import { defineStore } from "pinia";
import { ref, computed, ComputedRef } from "vue";

export interface Theme {
  "font-color": string;
  "primary-background-color": string;
  "secondary-background-color": string;
}

export const useThemeStore = defineStore("theme", () => {
  // --- AVAILABLE THEMES ---
  const dark: Theme = {
    "font-color": "white",
    "primary-background-color": "rgb(10, 0, 97)",
    "secondary-background-color": "black",
  };
  const light: Theme = {
    "font-color": "black",
    "primary-background-color": "white",
    "secondary-background-color": "skyblue",
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
