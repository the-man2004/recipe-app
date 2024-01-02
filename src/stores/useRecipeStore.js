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
  actions: {
    fetchRecipes: async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );

        const responseData = await response.json();

        console.log(responseData);
      } catch (err) {
        console.warn(err);
      }
    },
  },
});
