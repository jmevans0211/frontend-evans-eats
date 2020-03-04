export const getAllRecipes = async () => {
  const response = await fetch('https://evans-eats-api.herokuapp.com/api/v1/recipes/')

  if (!response.ok) {
    throw new Error('Could not get recipes')
  };
  
  const data = await response.json();

  return data;
};

export const getRecipesByCategory = async id => {
  const response = await fetch(
    `https://evans-eats-api.herokuapp.com/api/v1/recipes/${id}`
  )

  if (!response.ok) {
    throw new Error(
      'Could not get recipes in this category. Please try again.'
    )
  };

  const data = await response.json();

  return data;
};
