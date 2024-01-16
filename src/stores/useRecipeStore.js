import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => {
    return {
      miscellaneousRecipes: null,
      categoryRecipes: null,
    };
  },
  getters: {
    categoryRecipesObj: (state) => state.categoryRecipes,
  },
  actions: {
    async fetchCategory(category) {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        this.categoryRecipes = responseData.meals;
        console.log(this.categoryRecipes);
      } catch (err) {
        console.warn(err);
      }
    },
    // For fetching Miscellaneous recipes
    async fetchMiscellaneous() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        this.miscellaneousRecipes = responseData.meals;

        console.log(responseData);
      } catch (err) {
        console.warn(err);
      }
    },
  },
});
