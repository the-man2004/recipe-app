<template>
  <basic-hero />
  <div class="recipes-container">
    <h2>Recipes</h2>
    <p>{{ props.id }}</p>
  </div>
</template>

<script setup>
import BasicHero from "../components/BasicHero.vue";

const props = defineProps(["id"]);
</script>

<style scoped>
.recipes-container {
  margin-top: 4rem;
}
</style>
