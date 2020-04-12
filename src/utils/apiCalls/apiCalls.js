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

export const getCategories = async () => {
  const response = await fetch('https://evans-eats-api.herokuapp.com/api/v1/categories/')

  if (!response.ok) {
    throw new Error('Could not get categories')
  };
  
  const data = await response.json();

  return data;
};

export const postNewRecipe = async recipe => {
  console.log('in apiCalls--postNew', recipe)
  const options = {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(
    `https://evans-eats-api.herokuapp.com/api/v1/recipes/${recipe.category_id}`,
    options
  );
  if (!response.ok) {
    throw new Error('Could not add new recipe, please try again later.');
  }
  const data = await response.json();
  console.log(response, data)

  return data;
};
