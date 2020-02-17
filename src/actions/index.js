export const selectRecipes = recipesSelected => ({
  type: 'SELECT_RECIPES',
  recipesSelected
});

export const getCategoryIds = categoryIds => ({
  type: 'GET_CATEGORY_IDS',
  categoryIds
});
