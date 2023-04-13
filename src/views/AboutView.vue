<template>
  <WebView class="web" />
  <MobileAboutPage class="mobile" />
</template>

<script setup lang="ts">
import WebView from "../components/WebView.vue";
import MobileAboutPage from "../components/MobileAboutPage.vue";
</script>

<style scoped>
.mobile {
  display: none;
}

.web {
  display: block;
}

@media only screen and (max-width: 768px) {
  .mobile {
    display: block;
  }
  .web {
    display: none;
  }
}
</style>
