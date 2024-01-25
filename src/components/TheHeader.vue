<template>
  <div class="header">
    <nav>
      <router-link class="link home-link" to="/">Delicious Foods</router-link>
      <div class="links-container">
        <router-link class="link category-link" to="/recipes/dessert"
          >Dessert</router-link
        >
        <router-link class="link category-link" to="/recipes/breakfast"
          >Breakfast</router-link
        >
        <router-link class="link category-link" to="/recipes/seafood"
          >Seafood</router-link
        >
        <router-link class="link category-link" to="/recipes/starter"
          >Starter</router-link
        >
        <router-link class="link category-link" to="/recipes/side"
          >Side</router-link
        >
        <router-link class="link category-link" to="/recipes/vegan"
          >Vegan</router-link
        >
        <router-link class="link category-link" to="/recipes/chicken"
          >Chicken</router-link
        >
        <router-link class="link category-link" to="/recipes/beef"
          >Beef</router-link
        >
        <router-link class="link category-link" to="/recipes/pasta"
          >Pasta</router-link
        >
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
      <MobileNavbar />
    </nav>
  </div>
</template>

<script setup>
import MobileNavbar from "./MobileNavbar.vue";
</script>

<style scoped>
.header {
  background: var(--dark-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

nav {
  margin: 0 auto;
  padding: 0 1rem;
  height: 4rem;
  max-width: 80rem;
  display: flex;
  align-items: center;
}

.links-container {
  display: none;
}

.link {
  color: var(--secondary-color);
  text-decoration: none;
}

.category-link {
  transition: all 200ms ease;
}
.category-link:hover,
.category-link:focus {
  color: var(--accent-color);
  transform: translateY(0.15rem);
}

.home-link {
  font-family: "Playball", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  text-decoration-thickness: 2px;

  color: var(--accent-color);
  text-shadow: 1px 1px 2px var(--primary-color);
}

.social-links {
  display: none;
}

.burger-menu {
  margin-left: auto;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}

@media (min-width: 60rem) {
  nav {
    justify-content: space-between;
  }
  .burger-menu {
    display: none;
  }

  .links-container {
    display: flex;
    gap: 1rem;
  }

  .social-links {
    font-size: 1.2rem;
    display: flex;
    gap: 0.5rem;
  }
}
</style>
