<template>
  <header>
    <h1 class="web">TEYAH BRENNEN-DAVIES</h1>
    <h1 class="mobile">TEYAH BD</h1>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Changa+One&display=swap");
header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
}

h1 {
  font-family: "Changa One", cursive;
  font-size: 3.5rem;
  transition-duration: 0.3s;
}

/* h1:hover,
h1:focus {
  color: red;
} */

.web {
  display: block;
}

.mobile {
  display: none;
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  .web {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
