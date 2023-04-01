import { defineStore } from "pinia";
import { ref } from "vue";

export const usePageStore = defineStore("page", () => {
  const pages = ["Teyah Brennen-Davies", "My Projects", "My Blog"];
  const currentPageName = ref(pages[0]);

  function updatePage(index: number) {
    currentPageName.value = pages[index];
  }

  return { currentPageName, updatePage };
});
