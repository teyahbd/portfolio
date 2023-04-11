import { defineStore } from "pinia";
import { ref } from "vue";

export const usePageStore = defineStore("page", () => {
  const webPages = ["Teyah Brennen-Davies", "My Projects", "My Blog"];
  const mobilePages = ["Teyah BD", "Projects", "Blog"];

  const currentWebPageName = ref(webPages[0]);
  const currentMobilePageName = ref(mobilePages[0]);

  function updatePage(index: number) {
    currentWebPageName.value = webPages[index];
    currentMobilePageName.value = mobilePages[index];
  }

  return { currentWebPageName, currentMobilePageName, updatePage };
});
