export type Category = {
  strCategory: string;
};

export type CategoriesResponse = {
  meals: Category[];
};

export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type SearchForm = {
  search: string;
};
