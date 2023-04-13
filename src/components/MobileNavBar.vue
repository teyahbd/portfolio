<template>
  <nav>
    <MobileNavIcon
      :isSelected="false"
      label="about me"
      iconClass="fa fa-smile-o"
      route="/"
    />
    <MobileNavIcon
      :isSelected="false"
      label="my projects"
      iconClass="fa fa-code"
      route="/projects"
    />
    <MobileNavIcon
      :isSelected="false"
      label="get in touch"
      iconClass="fa fa-address-card-o"
      route="contact"
    />
  </nav>
</template>

<script setup lang="ts">
import MobileNavIcon from "./MobileNavIcon.vue";
</script>

<style scoped>
nav {
  height: fit-content;
  width: 100%;
  background-color: rgb(255, 255, 255);
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
}
</style>
