<template>
  <li>
    <img :src="props.recipe.strMealThumb" alt="" />
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
}

img {
  display: block;
  width: calc(25vw - 24px);
  height: auto;
}

@media (min-width: calc(80rem + 96px)) {
  img {
    width: 20rem;
  }
}
</style>
