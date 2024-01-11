<template>
  <div class="carousel-container">
    <ul class="carousel">
      <carousel-item
        v-for="recipe in recipes"
        :recipe="recipe"
        :key="recipe.idMeal"
      />
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRecipeStore } from "../../stores/useRecipeStore";
import CarouselItem from "./CarouselItem.vue";

const recipeStore = useRecipeStore();

const recipes = computed(() => recipeStore.miscellaneousRecipes);
</script>

<style scoped>
.carousel-container {
  margin: 1.5rem 3rem;
  display: none;
}

.carousel {
  /* background: white; */
  margin: 0 auto;
  padding: 0;
  max-width: 80rem;
  /* height: 20rem; */

  display: flex;

  overflow-x: scroll;
}

@media (min-width: 60rem) {
  .carousel-container {
    display: block;
  }
}
</style>
