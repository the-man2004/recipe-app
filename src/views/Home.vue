<template>
  <div class="hero">
    <h1 class="hero-title">Delicious Foods</h1>
  </div>
</template>

<style scoped>
.hero {
  height: 25vw;
  min-height: 10rem;
  max-height: 25rem;
  background-image: url("../assets/hero-image.jpg");
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-title {
  margin: 0;
  color: var(--accent-color);
  font-family: "Playball";
  font-size: clamp(2.5rem, 10vw, 7rem);
  text-shadow: 3px 3px 3px var(--primary-color);
}
</style>
