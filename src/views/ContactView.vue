<template>
  <MobileContactPage class="mobile" />
</template>

<script setup lang="ts">
import MobileContactPage from "../components/MobileContactPage.vue";
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
