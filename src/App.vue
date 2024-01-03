<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import { useRecipeStore } from "./stores/useRecipeStore";
import TheHeader from "./components/TheHeader.vue";

const recipeStore = useRecipeStore();

onMounted(() => {
  recipeStore.fetchRecipes();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

* {
  box-sizing: border-box;
}

:root {
  --primary-color: black;
  --secondary-color: white;
}

html {
  height: 100%;
}

body {
  margin: 0;
  background: var(--primary-color);
}

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--secondary-color);
}
</style>
