<template>
  <MobileProjectsPage class="mobile" />
</template>

<script setup lang="ts">
import MobileProjectsPage from "../components/MobileProjectsPage.vue";
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
