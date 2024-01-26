<template>
  <div class="error">
    <h2>{{ recipeStore.categoryError }}</h2>
    <nav class="redirection-nav">
      <button @click="$emit('retry')" class="retry">Retry</button>
      <router-link to="/" class="home">Home</router-link>
    </nav>
  </div>
</template>

<script setup>
import { useRecipeStore } from "../../stores/useRecipeStore";

const recipeStore = useRecipeStore();
</script>

<style scoped>
.error {
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.redirection-nav {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

h2 {
  color: var(--error-color);
  font-weight: 900;
}

.retry,
.home {
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  text-decoration: none;
  border-radius: 0.5rem;
  cursor: pointer;

  font-size: 1rem;
  font-weight: 700;

  color: var(--secondary-color);
  background: var(--dark-color);

  transition: all 200ms ease;
}

.retry:hover,
.home:hover,
.retry:focus,
.home:focus {
  transform: translateY(0.2rem);
  color: var(--accent-color);
}

@media (min-width: 40rem) {
  h2 {
    font-size: 2rem;
  }
}
</style>
