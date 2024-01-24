<template>
  <footer>
    <div>
      <router-link to="/" class="home-link">Delicious Foods</router-link>
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
  </footer>
</template>

<style scoped>
footer {
  margin: 2rem 0 0 0;
  background: var(--dark-color);
}

footer div {
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 80rem;
}

a {
  font-family: "Playball", sans-serif;
  text-decoration: none;
}

.home-link {
  margin: 0;
  color: var(--accent-color);
  font-family: "Playball";
  font-size: 2.5rem;
  text-shadow: 3px 3px 3px var(--primary-color);
}

.social-links {
  margin-top: 1rem;
  padding: 0;

  display: flex;
  gap: 0.5rem;

  font-size: 1.2rem;
}

.social-links a {
  color: var(--secondary-color);
}
</style>
