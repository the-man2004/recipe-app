<template>
  <div class="header">
    <nav>
      <router-link class="link home-link" to="/">Home</router-link>
      <div class="links-container">
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
  font-weight: 800;
  text-decoration: underline;
  text-decoration-thickness: 2px;
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
