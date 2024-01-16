<template>
  <basic-hero />
  <div class="recipes">
    <div class="bread-crumbs">
      <span>
        <router-link to="/">Home</router-link>
      </span>
      >> <span>Recipes</span> >> <span>{{ category }}</span>
    </div>
    <div class="recipes-container">
      <h2>Recipes</h2>
      <p>{{ category }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import BasicHero from "../components/BasicHero.vue";

const props = defineProps(["id"]);

const category = computed(
  () => props.id.charAt(0).toUpperCase() + props.id.slice(1)
);
</script>

<style scoped>
.recipes {
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 80rem;
}

.recipes-container {
}

.bread-crumbs {
  color: var(--accent-color);
}

.bread-crumbs a {
  text-decoration: none;
  font-weight: 700;
  color: var(--accent-color);
}

span {
  font-size: 1.2em;
}

@media (min-width: 40rem) {
  .bread-crumbs {
    font-size: 1.3rem;
  }
}
</style>
