<template>
  <the-hero />
  <the-carousel />
  <the-categories />
</template>

<script setup>
import { onMounted } from "vue";
import { useRecipeStore } from "../stores/useRecipeStore";
import TheHero from "../components/Home/TheHero.vue";
import TheCarousel from "../components/Home/TheCarousel.vue";
import TheCategories from "../components/Home/TheCategories.vue";

const recipeStore = useRecipeStore();

onMounted(() => {
  recipeStore.fetchMiscellaneous();
});
</script>
