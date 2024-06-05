<script setup></script>

<template>
  <RouterLink to="./repos" class="container h-60">
    <button class="font-bold">ENTER</button>
  </RouterLink>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
  width: 100%;
  margin: 0 auto;
}

button {
  background-color: rgb(73, 73, 73);
  padding: 1.5rem 5rem;
  border-radius: 3rem;
  color: rgb(208, 208, 208);
}

button:hover {
  background-color: rgb(48, 48, 48);
  color: white;
}
</style>
