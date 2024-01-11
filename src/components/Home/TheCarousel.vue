<template>
  <div class="carousel-container">
    <ul class="carousel">
      <carousel-item
        v-for="recipe in recipes"
        :recipe="recipe"
        :key="recipe.idMeal"
        ref="listOfRecipes"
        class="carouselItem"
      />
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRecipeStore } from "../../stores/useRecipeStore";
import CarouselItem from "./CarouselItem.vue";

const recipeStore = useRecipeStore();

const recipes = computed(() => recipeStore.miscellaneousRecipes);

const listOfRecipes = ref([]);

onMounted(() => {
  let num = 100;

  setInterval(() => {
    const recipes = document.querySelectorAll(".carouselItem");

    const maxMoves = recipes.length - 3;

    if (num / 100 === maxMoves) {
      num = 100;
      recipes.forEach((recipe) => {
        // recipe.style.border = "2px solid red";
        recipe.style.transform = `translateX(0)`;
      });
    } else {
      recipes.forEach((recipe) => {
        // recipe.style.border = "2px solid red";
        recipe.style.transform = `translateX(-${num}%)`;
      });
      num += 100;
    }
    // setTimeout(() => {
    //   recipes.forEach((recipe) => {
    //     recipe.style.border = "2px solid green";
    //     recipe.style.transform = `translateX(-${num}%)`;
    //   });
    // }, 2000);
  }, 3000);
});
</script>

<style scoped>
.test {
  color: white;
}

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

  overflow-x: hidden;
}

@media (min-width: 60rem) {
  .carousel-container {
    display: block;
  }
}
</style>
