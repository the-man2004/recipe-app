<template>
  <div v-if="recipeStore.specificRecipe !== null" class="recipe-container">
    <div>
      <img :src="thumbnail" alt="" />
      <a :href="recipeLink" class="title-link">
        <h2 class="recipe-name">{{ recipeName }}</h2>
      </a>
      <div class="social-links-container">
        <div class="social-links">
          <a href="https://facebook.com">
            <i class="fa-brands fa-facebook link"></i>
          </a>
          <a href="https://instagram.com">
            <i class="fa-brands fa-instagram link"></i>
          </a>
          <a href="https://pinterest.com">
            <i class="fa-brands fa-pinterest link"></i>
          </a>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h3>Ingredients</h3>
        <div class="divider"></div>
        <ul class="ingredient-container">
          <li
            v-for="ingredient in ingredients"
            :key="ingredient"
            class="ingredient"
          >
            {{ ingredient[0] }}
            <span>{{ ingredient[1] }}</span>
          </li>
        </ul>
      </div>
      <div class="instructions-container">
        <h3>Instructions</h3>
        <div class="divider"></div>
        <p class="instructions">{{ instructions }}</p>
      </div>
    </div>
  </div>
  <div class="loading-container">
    <LoadingSpinner v-if="recipeStore.isLoading === true" />
  </div>
  <RecipeError
    v-if="recipeStore.specificRecipeError !== null"
    @retry="recipeStore.fetchSpecificRecipe(props.id)"
  />
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRecipeStore } from "../stores/useRecipeStore";
import RecipeError from "../components/Error/RecipeError.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

const props = defineProps(["id"]);

const recipeStore = useRecipeStore();

const filterVariables = (param) => {
  let ingredientArray = [];

  for (const key in recipeStore.specificRecipe) {
    if (key.startsWith(param)) {
      ingredientArray.push(recipeStore.specificRecipe[key]);
    }
  }

  // Removing empty values
  const finalIngredientArray = ingredientArray.filter(
    (value) => value !== "" && value !== null
  );

  console.log(finalIngredientArray);

  return finalIngredientArray;
};

const thumbnail = computed(() => recipeStore.specificRecipeObj.strMealThumb);
const recipeName = computed(() => recipeStore.specificRecipeObj.strMeal);
const recipeLink = computed(() => recipeStore.specificRecipeObj.strSource);

const ingredients = computed(() => {
  const ingredientsList = filterVariables("strIngredient");
  const measurements = filterVariables("strMeasure");

  let finalIngredients = [];

  for (let i = 0; i < ingredientsList.length; i++) {
    finalIngredients.push([ingredientsList[i], measurements[i]]);
  }

  return finalIngredients;
});
const instructions = computed(
  () => recipeStore.specificRecipeObj.strInstructions
);

onMounted(() => {
  recipeStore.fetchSpecificRecipe(props.id);
});
</script>

<style scoped>
.recipe-container {
  margin: 5rem auto 0 auto;
  padding: 0 1rem;
  max-width: 80rem;
  min-height: calc(100vh - 5rem);
}

.recipe-name {
  padding: 0;
  margin-top: 1rem;
  font-size: 2rem;
  text-align: center;
  color: var(--accent-color);

  transition: all 200ms ease;
}

img {
  width: 100%;
  aspect-ratio: 1 / 1;
}

.title-link {
  text-decoration: none;
}

h3 {
  margin-top: 0;
  text-align: center;
}

.social-links {
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  display: flex;
  gap: 0.5rem;

  /* background: var(--primary); */
}

.social-links a {
  color: var(--secondary-color);
}

.social-links::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    to right,
    var(--accent-color) 0%,
    var(--accent-color) 35%,
    rgba(0, 0, 0, 0) 35%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 65%,
    var(--accent-color) 65%,
    var(--accent-color) 100%
  );
}

.ingredient-container {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.ingredient {
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: var(--dark-color);

  list-style: none;
}

.ingredient span {
  display: block;
  font-size: 0.7rem;
  opacity: 0.5;
}

.instructions-container {
  padding-bottom: 3rem;
}

.instructions {
  white-space: pre-wrap;
}

.divider {
  height: 3px;
  width: 100%;
  background: var(--dark-color);
}

.recipe-name:hover {
  transform: translateY(0.3rem);
}

.loading-container {
  padding-top: 7rem;
  min-height: 100vh;
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
