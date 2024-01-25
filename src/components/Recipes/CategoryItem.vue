<template>
  <li class="recipe">
    <router-link @click="scrollToTop" :to="link">
      <img :src="thumbnail" alt="" />
      <p>{{ recipeTitle }}</p>
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

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>

<style scoped>
.recipe {
  list-style: none;
  text-align: center;
  margin-bottom: 1rem;
}

.recipe a {
  text-decoration: none;
  color: var(--secondary-color);
}

.recipe img {
  width: 100%;
  height: auto;

  background: var(--dark-color);
  aspect-ratio: 1 / 1;

  transition: all 300ms ease;
}

.recipe p {
  margin: 0.5rem 0;

  transition: all 300ms ease;
}

.social-links {
  position: relative;

  display: flex;
  justify-content: center;
  font-size: 1rem;
  display: flex;
  gap: 0.5rem;

  /* background: var(--primary); */
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
    var(--accent-color) 30%,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 70%,
    var(--accent-color) 70%,
    var(--accent-color) 100%
  );
}

/* Hover effects */
.recipe:hover img,
.recipe:focus img {
  border-radius: 50%;
}

.recipe:hover p,
.recipe:focus p {
  transform: translateY(0.2rem);
  color: var(--accent-color);
}

@media (min-width: 40rem) {
  .recipe {
    font-size: 1.2rem;
  }
}
</style>
