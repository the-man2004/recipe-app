<template>
  <basic-hero />
  <div class="recipes">
    <div class="bread-crumbs">
      <span>
        <router-link to="/">Home</router-link>
      </span>
      >> <span>Recipes</span> >> <span>{{ category }}</span>
    </div>
    <h2 class="category">{{ category }}</h2>
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
  font-size: 1em;
}

.category {
  margin: 1rem 0;

  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
}

@media (min-width: 40rem) {
  .bread-crumbs {
    font-size: 1.3rem;
  }

  .category {
    font-size: 2.5rem;
  }
}
</style>
