<template>
  <h1>{{ recipeStore.mainTitle }}</h1>
</template>

<script setup>
import { useRecipeStore } from "./stores/useRecipeStore";

const recipeStore = useRecipeStore();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
