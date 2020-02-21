export const selectRecipes = recipesSelected => ({
  type: 'SELECT_RECIPES',
  recipesSelected
});

export const storeCategoryIds = categoryIds => ({
  type: 'STORE_CATEGORY_IDS',
  categoryIds
});

export const clearRecipes = () => ({
  type: 'CLEAR_RECIPES'
})
