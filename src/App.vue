<template>
  <MainView class="web" :isMobile="false" /><MainView
    class="mobile"
    :isMobile="true"
  />
</template>

<script setup lang="ts">
import MainView from "./components/MainView.vue";
</script>

<style scoped>
.web {
  display: block;
}

.mobile {
  display: none;
}

@media only screen and (max-width: 768px) {
  .web {
    display: none;
  }

  .mobile {
    display: block;
  }
}
</style>
