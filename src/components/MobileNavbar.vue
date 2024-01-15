<template>
  <div @click="toggleModal" class="burger-menu">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
  <teleport to="body">
    <transition name="fade-in">
      <div v-if="isNavOpen" @click="toggleModal" class="backdrop"></div>
    </transition>
    <transition name="slide-in">
      <nav v-if="isNavOpen" @click="handleClick($event)">
        <div>
          <router-link class="link home-link" to="/"
            >Delicious Foods</router-link
          >
        </div>
        <div class="category-links">
          <router-link class="link category-link" to="/">Home</router-link>
          <router-link class="link category-link" to="/">Dessert</router-link>
          <router-link class="link category-link" to="/">Breakfast</router-link>
          <router-link class="link category-link" to="/">Seafood</router-link>
          <router-link class="link category-link" to="/">Starter</router-link>
          <router-link class="link category-link" to="/">Side</router-link>
          <router-link class="link category-link" to="/">Vegan</router-link>
          <router-link class="link category-link" to="/">Chicken</router-link>
          <router-link class="link category-link" to="/">Beef</router-link>
          <router-link class="link category-link" to="/">Pasta</router-link>
        </div>
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
      </nav>
    </transition>
  </teleport>
</template>

<script setup>
import { ref } from "vue";

const isNavOpen = ref(false);

const toggleModal = () => {
  isNavOpen.value = !isNavOpen.value;
};

const handleClick = (event) => {
  if (event.target.nodeName === "A") {
    toggleModal();
  }
};
</script>

<style scoped>
.burger-menu {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-left: auto;
  cursor: pointer;
}

.bar {
  width: 2rem;
  height: 0.2rem;
  background: var(--secondary-color);
}

.backdrop {
  position: absolute;
  inset: 0;
  background: var(--primary-color);
  opacity: 0.4;
  cursor: pointer;
}

/* Backdrop transition classes */
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.5s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}

/* Navbar transition classes */
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(400px);
}

nav {
  padding: 0 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  width: 70vw;
  max-width: 25rem;
  height: 100vh;

  z-index: 150;

  background: var(--secondary-color);
}

.link {
  color: var(--primary-color);
  text-decoration: none;
}

.category-links {
  display: flex;
  flex-direction: column;
}

.category-link {
  padding: 0.6rem 0;
  font-weight: 500;
  border-bottom: 0.1rem solid rgb(206, 206, 206);
  transition: color 200ms ease;
}

.category-link:hover,
.category-link:focus {
  color: var(--accent-color);
}

.category-link:last-child {
  border-bottom: none;
}

.home-link {
  display: block;
  margin: 2rem 0;
  text-align: center;
  color: var(--accent-color);
  font-family: "Playball";
  font-size: 2rem;
  text-shadow: 1px 1px 2px var(--primary-color);
}

.social-links {
  font-size: 1.3rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

@media (min-width: 60rem) {
  .burger-menu,
  nav,
  .backdrop {
    display: none;
  }
}
</style>
