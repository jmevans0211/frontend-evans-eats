export const displayRandomRecipes = (recipes) => {
  let randomRecipes = recipes.splice(0, 6)
  return randomRecipes
}