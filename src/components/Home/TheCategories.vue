<template>
  <div class="category-contianer">
    <h2>Find a recipe for every occasion!</h2>
    <ul>
      <li class="category-item">
        <router-link to="/">
          <img src="../../assets/img/dessert.png" alt="" />
          <p>The most delicious Dessert recipes</p>
        </router-link>
      </li>
      <li class="category-item">
        <router-link to="/">
          <img src="../../assets/img/breakfast.png" alt="" />
          <p>Some great Breakfast recipes</p>
        </router-link>
      </li>
      <li class="category-item">
        <router-link to="/">
          <img src="../../assets/img/seafood.png" alt="" />
          <p>Some delicious Seafood recipes</p>
        </router-link>
      </li>
      <li class="category-item">
        <router-link to="/">
          <img src="../../assets/img/starter.png" alt="" />
          <p>Some delicious Starter recipes</p>
        </router-link>
      </li>
      <li class="category-item">
        <router-link to="/">
          <img src="../../assets/img/side.png" alt="" />
          <p>The best Side's</p>
        </router-link>
      </li>
      <li class="category-item">
        <router-link to="/">
          <img src="../../assets/img/vegan.png" alt="" />
          <p>Some delicious Vegan recipes</p>
        </router-link>
      </li>
      <li class="category-item">
        <router-link to="/">
          <img src="../../assets/img/chicken.png" alt="" />
          <p>Some delicious Chicken recipes</p>
        </router-link>
      </li>
      <li class="category-item">
        <router-link to="/">
          <img src="../../assets/img/beef.png" alt="" />
          <p>Some delicious Beef recipes</p>
        </router-link>
      </li>
      <li class="category-item">
        <router-link to="/">
          <img src="../../assets/img/pasta.png" alt="" />
          <p>Some delicious Pasta recipes</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}
.category-contianer {
  padding: 0 1.5rem;
  margin: 0 auto;
  max-width: 80rem;
}

.category-contianer ul {
  padding: 0;
}

.category-item {
  list-style: none;
}

.category-item a {
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding: 1.5rem 0;

  text-decoration: none;
  color: var(--secondary-color);
  border-bottom: 2px solid var(--dark-color);
}

.category-item img {
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(white, var(--accent-color));

  transition: all 750ms ease;
}

.category-item p {
  padding-left: 1.5rem;
  font-size: 1.5rem;
  margin: auto 0;

  transition: all 300ms ease;
}

.category-item:hover img {
  border-radius: 50rem;
}
.category-item:hover p {
  transform: translateX(1rem);
}
</style>
