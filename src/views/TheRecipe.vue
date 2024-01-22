<template>
  <div v-if="recipeStore.specificRecipe !== null" class="recipe-container">
    <p>{{ props.id }}</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRecipeStore } from "../stores/useRecipeStore";

const props = defineProps(["id"]);

const recipeStore = useRecipeStore();

const thumbnail = computed(() => recipeStore.specificRecipeObj.strMealThumb);

onMounted(() => {
  recipeStore.fetchSpecificRecipe(props.id);
});
</script>

<style scoped>
.recipe-container {
  margin-top: 4rem;
}
</style>
