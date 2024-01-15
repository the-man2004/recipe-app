<template>
  <div class="recipe-container">
    <h2>Recipe</h2>
    <p>{{ props.id }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["id"]);

console.log(props.id);
</script>

<style scoped>
.recipe-container {
  margin-top: 4rem;
}
</style>
