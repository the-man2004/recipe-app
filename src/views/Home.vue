<template>
  <the-hero />
  <the-carousel />
</template>

<script setup>
import { onMounted } from "vue";
import { useRecipeStore } from "../stores/useRecipeStore";
import TheHero from "../components/Home/TheHero.vue";
import TheCarousel from "../components/Home/TheCarousel.vue";

const recipeStore = useRecipeStore();

onMounted(() => {
  recipeStore.fetchMiscellaneous();
});
</script>
