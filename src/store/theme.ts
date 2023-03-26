import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const userDefaultTheme = ref(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const currentThemeName = ref(userDefaultTheme);
  const currentTheme = computed(() => {
    return currentThemeName.value === "dark" ? dark : light;
  });
  const dark = ref({
    "font-color": "white",
    "primary-background-color": "rgb(10, 0, 97)",
    "secondary-background-color": "black",
  });
  const light = ref({
    "font-color": "black",
    "primary-background-color": "white",
    "secondary-background-color": "skyblue",
  });

  return { currentTheme, userDefaultTheme };
});
