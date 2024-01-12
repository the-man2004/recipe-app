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
    <div class="button-container">
      <button @click="moveLeft">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <button @click="moveRight">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
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
.test {
  color: white;
}

.carousel-container {
  margin: 2rem 3rem;
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

.button-container {
  margin: 2rem auto;
  padding: 0;
  max-width: 80rem;
  display: flex;
  gap: 1rem;
}

button {
  background: var(--primary-color);
  border: none;

  aspect-ratio: 1 / 1;
  border-radius: 10rem;
  outline: 2px solid var(--dark-color);

  padding: 0 0.8rem;

  color: var(--accent-color);
  font-size: 1.5rem;

  transition: color 300ms ease;
}

button:hover,
button:focus {
  background: var(--accent-color);
  color: var(--dark-color);
}

@media (min-width: 60rem) {
  .carousel-container {
    display: block;
  }
}
</style>
