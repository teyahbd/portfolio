<template>
  <WebView class="web" />
  <MobileView class="mobile" />
  <!-- slots -->
</template>

<script setup lang="ts">
import MobileView from "./MobileView.vue";
import WebView from "./WebView.vue";
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
