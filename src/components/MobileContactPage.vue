<template>
  <main>
    <HeaderContainer :isMobile="true" mobilePageHeader="CONTACT" />
    <PageComponent
      :isScrollPage="false"
      v-for="page in 5"
      :key="page"
      height="20vh"
    />
  </main>
</template>

<script setup lang="ts">
import HeaderContainer from "../components/HeaderContainer.vue";
import PageComponent from "./PageComponent.vue";
</script>

<style scoped>
main {
  height: fit-content;
  min-height: 100vh;
}
</style>
