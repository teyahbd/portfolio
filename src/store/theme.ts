import { defineStore } from "pinia";
import { ref, computed, ComputedRef } from "vue";

export interface Theme {
  "font-color": string;
  "primary-background-color": string;
  "accent-color": string;
}

export const useThemeStore = defineStore("theme", () => {
  // --- AVAILABLE THEMES ---
  const dark: Theme = {
    "font-color": "#d9b8ff",
    "primary-background-color": "#110025",
    "accent-color": "white",
  };
  const light: Theme = {
    "font-color": "white",
    "primary-background-color": "#ff94b9",
    "accent-color": "red",
  };

  const userDefaultTheme = ref(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const currentThemeName = ref(userDefaultTheme);

  const currentTheme: ComputedRef<Theme> = computed(() => {
    return currentThemeName.value === "dark" ? dark : light;
  });

  function changeTheme() {
    currentThemeName.value =
      currentThemeName.value === "dark" ? "light" : "dark";
  }

  return { currentTheme, changeTheme };
});
