<template>
  <TheHeader />
  <router-view></router-view>
  <TheFooter />
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playball&display=swap");

* {
  box-sizing: border-box;
}

:root {
  --primary-color: black;
  --secondary-color: white;
  --accent-color: rgb(229, 183, 59);
  --dark-color: rgb(36, 36, 36);
  --light-color: gray;
  --error-color: brown;
}

html {
  height: 100%;
  /* overflow-x: hidden; */
}

body {
  margin: 0;
  background: var(--primary-color);
}

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--secondary-color);
}
</style>
