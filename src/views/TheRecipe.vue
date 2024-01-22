<template>
  <div v-if="recipeStore.specificRecipe !== null" class="recipe-container">
    <div>
      <img :src="thumbnail" alt="" />
      <h2 class="recipe-name">{{ recipeName }}</h2>
    </div>
    <div>
      <h3>Ingredients</h3>
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
      <div>
        <h3>Instructions</h3>
        <p class="instructions">{{ instructions }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRecipeStore } from "../stores/useRecipeStore";

const props = defineProps(["id"]);

const recipeStore = useRecipeStore();

const recipeName = computed(() => recipeStore.specificRecipeObj.strMeal);
const thumbnail = computed(() => recipeStore.specificRecipeObj.strMealThumb);
const instructions = computed(
  () => recipeStore.specificRecipeObj.strInstructions
);

const ingredients = computed(() => {
  let ingredientArray = [];

  for (const key in recipeStore.specificRecipe) {
    if (key.startsWith("strIngredient")) {
      ingredientArray.push(recipeStore.specificRecipe[key]);
    }
  }

  // Removing empty values
  const finalIngredientArray = ingredientArray.filter((value) => value !== "");

  console.log(ingredientArray);

  return finalIngredientArray;
});

onMounted(() => {
  recipeStore.fetchSpecificRecipe(props.id);
});
</script>

<style scoped>
.recipe-container {
  margin: 5rem auto 0 auto;
  padding: 0 1rem;
  max-width: 80rem;
}

.recipe-name {
  padding: 0;
  margin-top: 1rem;
  font-size: 2rem;
  text-align: center;
  color: var(--accent-color);
}

img {
  width: 100%;
}

h3 {
  margin-top: 0;
  text-align: center;
}

.instructions {
  white-space: pre-wrap;
}

@media (min-width: 40rem) {
  .recipe-container {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
}
</style>
