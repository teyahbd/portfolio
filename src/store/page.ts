import { defineStore } from "pinia";
import { ref } from "vue";

export const usePageStore = defineStore("page", () => {
  const webPages = [
    "Teyah Brennen-Davies",
    "About Me",
    "Stack & Skills",
    "My Projects",
    "Get In Touch",
  ];
  const mobilePages = [
    "Teyah BD",
    "About Me",
    "Stack & Skills",
    "My Projects",
    "Get In Touch",
  ];

  const mobilePageHeightRatios = [1, 1, 1, 4, 1];

  const currentWebPageName = ref(webPages[0]);
  const currentMobilePageName = ref(mobilePages[0]);

  function updatePage(index: number) {
    currentWebPageName.value = webPages[index];
    currentMobilePageName.value = mobilePages[index];
  }

  return {
    currentWebPageName,
    currentMobilePageName,
    updatePage,
    webPages,
    mobilePageHeightRatios,
  };
});
