<template>
  <li class="recipe">
    <router-link :to="link">
      <img :src="thumbnail" alt="" />
      <p>{{ recipeTitle }}</p>
    </router-link>
  </li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["recipe"]);

const link = computed(() => {
  return `/recipe/${props.recipe.idMeal}`;
});
const thumbnail = computed(() => props.recipe.strMealThumb);
const recipeTitle = computed(() => props.recipe.strMeal);
</script>

<style scoped>
.recipe {
  list-style: none;
}

.recipe a {
  text-decoration: none;
  color: var(--secondary-color);
}

.recipe img {
  width: 100%;
  height: auto;
}
</style>
