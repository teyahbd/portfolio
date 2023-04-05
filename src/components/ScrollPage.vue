<template>
  <section class="page-container">
    <div v-if="props.page === 'page 1'">
      <TextContainer :text="firstPageText" />
      <img src="../assets/sun.png" />
    </div>
    <div v-else-if="props.page === 'page 2'">
      <img src="../assets/sun.png" />
      <ProjectList />
    </div>
    <div v-else>
      <h1>{{ props.page }}</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import ProjectList from "./ProjectList.vue";
import TextContainer from "./TextContainer.vue";

const firstPageText =
  "Hi! I'm Teyah. I'm a software developer. I started my journey in tech with the Northcoders Software Development bootcamp and I'm currently a Front End Software Engineer with Rolls Royce.";

const props = defineProps<{
  page: string;
}>();
</script>

<style scoped>
.page-container {
  min-height: 90vh;
  /* border: 1px dashed blue; */
  min-width: 100vw;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  color: inherit;
}

div {
  height: 90vh;
  max-height: 90vh;
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

img {
  width: 500px;
  height: 500px;
}
</style>
