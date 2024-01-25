<template>
  <li>
    <router-link @click="scrollToTop" :to="link">
      <img :src="thumbnail" alt="" />
      <div class="title-container">
        <p>{{ title }}</p>
      </div>
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
const title = computed(() => props.recipe.strMeal);

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>

<style scoped>
li {
  list-style: none;
  display: block;
  width: calc(25vw - 48px);

  position: relative;

  /* border: 2px solid var(--primary-color); */

  transition: all 500ms ease;
}

a {
  color: var(--secondary-color);
}

img {
  display: block;
  padding: 2px;
  width: calc(25vw - 48px);
  height: auto;
  aspect-ratio: 1 / 1;
}

.title-container {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: end;
  justify-content: center;

  background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8));
}

.title-container p {
  padding: 0 0.5rem;
  text-align: center;
  font-weight: 600;

  transition: all 300ms ease;
}

.title-container:hover p {
  color: var(--accent-color);
  transform: translateY(0.3rem);
}

@media (min-width: calc(80rem + 96px)) {
  img {
    width: 17rem;
  }
}
</style>
