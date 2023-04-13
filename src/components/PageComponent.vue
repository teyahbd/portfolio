<template>
  <section
    :class="isScrollPage ? 'page web-scroll' : 'page'"
    :style="{ height: props.height }"
  ></section>
</template>

<script setup lang="ts">
const props = defineProps<{
  height?: string;
  isScrollPage: boolean;
}>();
</script>

<style scoped>
.page {
  width: 100%;
  border: 1px solid red;
}

.web-scroll {
  min-height: 88vh;
  min-width: 100vw;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  color: inherit;
}
</style>
