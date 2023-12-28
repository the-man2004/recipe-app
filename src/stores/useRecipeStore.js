import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => {
    return {
      title: "Hello!",
    };
  },
  getters: {
    mainTitle: (state) => state.title,
  },
  actions: {},
});
