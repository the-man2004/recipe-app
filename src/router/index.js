import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});

export default router;
