import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Recipes from "../views/Recipes";
import TheRecipe from "../views/TheRecipe";
import NotFound from "../views/NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/recipes/:id",
      props: true,
      component: Recipes,
    },
    {
      path: "/recipe/:id",
      props: true,
      component: TheRecipe,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
