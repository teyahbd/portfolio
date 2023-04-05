<template>
  <div class="card">
    <h2>Board Game Review Site</h2>
    <div class="stack-icons">
      <i class="fa fa-brands fa-react" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  background-color: white;
  background-image: url("../assets/reviewsite.png");
  background-size: cover;
  height: 25vh;
  width: 30vh;
  margin: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: start;
  padding: 1rem;
  transition-duration: 0.2s;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

h2 {
  color: rgb(0, 101, 156);
}

.stack-icons {
  display: flex;
  flex-direction: column;
  height: 100%;
}

i {
  color: rgb(0, 162, 255);
  font-size: 2rem;
}
</style>
