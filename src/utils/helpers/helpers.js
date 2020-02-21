export const displayRandomRecipes = (recipes) => {
  let randomRecipes = recipes.splice(0, 6)
  return randomRecipes
};

//export const getCategoryIds = recipes => {
  // (already have the names of the category so hard code this!)
  //return //=> {category_1: 1, category_2:2}
//}
