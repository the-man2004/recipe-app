<template>
  <div v-if="recipes" class="carousel-container">
    <ul class="carousel">
      <carousel-item
        v-for="recipe in recipes"
        :recipe="recipe"
        :key="recipe.idMeal"
        class="carouselItem"
      />
    </ul>
    <button @click="moveLeft" class="btn-left">
      <i class="fa-solid fa-arrow-left"></i>
    </button>
    <button @click="moveRight" class="btn-right">
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRecipeStore } from "../../stores/useRecipeStore";
import CarouselItem from "./CarouselItem.vue";

const recipeStore = useRecipeStore();

const recipes = computed(() => recipeStore.miscellaneousRecipes);

let num = ref(0);

const moveRight = () => {
  const recipes = document.querySelectorAll(".carouselItem");

  const maxMoves = recipes.length - 4;

  if (num.value / 100 >= maxMoves) {
    num.value = 0;
    recipes.forEach((recipe) => {
      recipe.style.transform = `translateX(0)`;
    });
  } else {
    num.value += 100;
    recipes.forEach((recipe) => {
      recipe.style.transform = `translateX(-${num.value}%)`;
    });
  }

  console.log(num.value);
};

const moveLeft = () => {
  const recipes = document.querySelectorAll(".carouselItem");

  const maxMoves = recipes.length - 3;

  if (num.value === 0) {
    num.value = maxMoves * 100;
    recipes.forEach((recipe) => {
      recipe.style.transform = `translateX(${num.value})`;
    });
  } else {
    num.value -= 100;
    recipes.forEach((recipe) => {
      recipe.style.transform = `translateX(-${num.value}%)`;
    });
  }

  console.log(num.value);
};
</script>

<style scoped>
.carousel-container {
  margin: 2rem auto;
  padding: 0 6rem;
  max-width: 80rem;
  display: none;
  position: relative;
}

.carousel {
  /* background: white; */
  margin: 0 auto;
  padding: 0;
  width: 100%;
  /* height: 20rem; */

  display: flex;

  overflow-x: hidden;
}

button {
  background: var(--primary-color);
  border: 2px solid var(--primary-color);
  /* outline: none; */
  cursor: pointer;

  aspect-ratio: 1 / 1;
  border-radius: 10rem;

  padding: 0 0.8rem;

  color: var(--accent-color);
  font-size: 1.5rem;

  transition: all 300ms ease;
}

.btn-left {
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
}

.btn-right {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
}

button:hover {
  transform: translateX(-2px) translateY(-50%);
}

.btn-left:hover,
.btn-left:focus {
  transform: translateX(-5px) translateY(-50%);
}

.btn-right:hover,
.btn-right:focus {
  transform: translateX(5px) translateY(-50%);
}

@media (min-width: 60rem) {
  .carousel-container {
    display: block;
  }
}
</style>
