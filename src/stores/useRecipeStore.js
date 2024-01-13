import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => {
    return {
      miscellaneousRecipes: null,
    };
  },
  getters: {
    mainTitle: (state) => state.title,
  },
  actions: {
    async fetchCategory() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        console.log(responseData);
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

      this.fetchCategory();
    },
  },
});
