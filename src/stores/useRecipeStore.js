import { defineStore } from "pinia";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => {
    return {
      isLoading: false,

      miscellaneousRecipes: null,
      categoryRecipes: null,
      specificRecipe: null,

      categoryError: null,
      specificRecipeError: null,
    };
  },
  getters: {
    categoryRecipesObj: (state) => state.categoryRecipes,
    specificRecipeObj: (state) => state.specificRecipe,
  },
  actions: {
    async fetchCategory(category) {
      this.isLoading = true;
      this.categoryError = null;

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

        this.isLoading = false;
      } catch (err) {
        console.warn(err.message);

        // Set categoryError = err.message
        this.categoryError = err.message;
        this.isLoading = false;
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
    // for Fetching a specific recipe
    async fetchSpecificRecipe(id) {
      this.isLoading = true;
      this.specificRecipeError = null;

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        this.specificRecipe = responseData.meals[0];

        console.log(responseData);

        this.isLoading = false;
      } catch (err) {
        console.warn(err.message);
        this.specificRecipeError = err.message;

        this.isLoading = false;
      }
    },
  },
});
