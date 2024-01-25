<template>
  <div class="recipes-wrapper">
    <basic-hero />
    <div class="recipes">
      <div class="bread-crumbs">
        <span>
          <router-link to="/">Home</router-link>
        </span>
        >> <span>Recipes</span> >> <span>{{ category }}</span>
      </div>
      <h2 class="category">{{ category }}</h2>
      <div>
        <ul class="recipes-container">
          <category-item
            v-for="recipe in recipeStore.categoryRecipesObj"
            :recipe="recipe"
            :key="recipe.idMeal"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRecipeStore } from "../stores/useRecipeStore";
import BasicHero from "../components/BasicHero.vue";
import CategoryItem from "../components/Recipes/CategoryItem.vue";

const props = defineProps(["id"]);

const recipeStore = useRecipeStore();

watch(
  () => props.id,
  () => {
    recipeStore.fetchCategory(props.id);
  }
);

const category = computed(
  () => props.id.charAt(0).toUpperCase() + props.id.slice(1)
);

onMounted(() => {
  recipeStore.fetchCategory(props.id);
});
</script>

<style scoped>
.recipes-wrapper {
  min-height: 100vh;
}

.recipes {
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 80rem;
}

.bread-crumbs {
  color: var(--accent-color);
}

/* Bread crumbs styling */
.bread-crumbs a {
  text-decoration: none;
  font-weight: 700;
  color: var(--accent-color);
}

span {
  font-size: 1em;
}

/* Category heading styling */
.category {
  margin: 1rem 0;

  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
}

/* Recipe conntainer styling */
.recipes-container {
  padding: 0;
  margin-bottom: 3rem;
}

@media (min-width: 25rem) {
  .recipes-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (min-width: 40rem) {
  .bread-crumbs {
    font-size: 1.3rem;
  }

  .category {
    font-size: 2.5rem;
  }

  .recipes-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
