<template>
  <WebView class="web" />
  <MobileView class="mobile" />
</template>

<script setup lang="ts">
import MobileView from "./views/MobileView.vue";
import WebView from "./views/WebView.vue";
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
