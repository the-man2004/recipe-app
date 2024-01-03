<template>
  <div class="header">
    <nav>
      <router-link to="/">Home</router-link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="burger-menu"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </nav>
  </div>
</template>

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
  justify-content: space-between;
}

a {
  color: var(--secondary-color);
  text-decoration: none;
}

.burger-menu {
  width: 2rem;
  height: 2rem;
  margin: 0;
  cursor: pointer;
}
</style>
