<template>
  <section :style="{ overflowX: 'auto' }">
    <h2>Here are some of the projects I've worked on.</h2>
    <div
      :style="{
        display: 'flex',
        overflowX: 'scroll',
        width: 'max-content',
        overflowY: 'hidden',
      }"
    >
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from "../UIComponents/ProjectCard.vue";
</script>

<style scoped>
section {
  width: 100%;
}
</style>
