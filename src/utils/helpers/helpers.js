export const displayRandomRecipes = (recipes) => {
  let randomRecipes = recipes.splice(0, 6)
  return randomRecipes
};

export const getCategoryIds = recipes => {
  return recipes.reduce((acc, recipe) => {
    if (!acc[recipe.category]){
      acc[recipe.category] = recipe.category_id
    }

    return acc;
  }, {})
}


// function sortColor() {
//   return stars.reduce((acc, star) => {
//     if(!acc[star.color]){
//       acc[star.color] = []
//     }
//     if(!acc[star.color].includes(star.color)){
//       acc[star.color].push(star)
//     }
//     return acc
//   }, {})