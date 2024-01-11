<template>
  <li>
    <img :src="props.recipe.strMealThumb" alt="" />
    <!-- <p>Hello</p> -->
  </li>
</template>

<script setup>
const props = defineProps(["recipe"]);
</script>

<style scoped>
li {
  list-style: none;
  display: block;
  width: calc(25vw - 24px);

  transition: all 500ms ease;
}

img {
  display: block;
  width: calc(25vw - 24px);
  height: auto;
  aspect-ratio: 1 / 1;
}

@media (min-width: calc(80rem + 96px)) {
  img {
    width: 20rem;
  }
}
</style>
