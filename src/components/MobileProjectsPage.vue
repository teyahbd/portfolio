<template>
  <main>
    <HeaderContainer :isMobile="true" mobilePageHeader="PROJECTS" />
    <PageComponent
      :isScrollPage="false"
      v-for="page in 3"
      :key="page"
      height="50vh"
    />
  </main>
</template>

<script setup lang="ts">
import HeaderContainer from "../components/HeaderContainer.vue";
import PageComponent from "./PageComponent.vue";
</script>

<style scoped>
div {
  height: 200vh;
}
</style>
