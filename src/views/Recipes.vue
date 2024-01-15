<template>
  <div class="recipes-container">
    <h2>Recipes</h2>
    <p>{{ props.id }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["id"]);

console.log(props.id);
</script>

<style scoped>
.recipes-container {
  margin-top: 4rem;
}
</style>
