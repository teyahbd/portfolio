<template>
  <RouterLink :to="props.route" :class="styling">
    <i :class="props.iconClass"></i>
    <p>{{ props.label }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  isSelected: boolean;
  label: string;
  iconClass: string;
  route: string;
}>();

const styling = props.isSelected ? "nav-button current-page" : "nav-button";
</script>

<style scoped>
.nav-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ff94b9;
  font-size: 0.8rem;
  transition-duration: 0.3s;
  text-decoration: none;
}

.nav-button:hover,
.nav-button:focus,
.current-page {
  color: rgb(0, 208, 255);
}

i {
  font-size: 2rem;
}
</style>
