export const displayRandomRecipes = (recipes) => {
  let randomRecipes = recipes.splice(0, 6)
  return randomRecipes
};

export const getCategoryIds = recipes => {
  let renamedRecipes = renameCategories(recipes)
  return recipes.reduce((acc, recipe) => {
    if (!acc[recipe.category]){
      acc[recipe.category] = recipe.category_id
    }

    return acc;
  }, {})
};

const renameCategories = recipes => {
  recipes.map(recipe => {
    if (recipe.category === 'Meals') {
      recipe.category = 'meals'
    } else if (recipe.category === 'Soups and Salads') {
      recipe.category = 'soups_and_salads'
    } else if (recipe.category === 'Apps') {
      recipe.category = 'apps'
    } else if (recipe.category === 'Desserts') {
      recipe.category = 'desserts'
    } else if (recipe.category === 'Beverages'){
      recipe.category = 'beverages'
    }
  })
};

export const cleanCategories = categories => {
  categories.map(category => {
    return { id: category.id, name: category.category_name }
  })
}
