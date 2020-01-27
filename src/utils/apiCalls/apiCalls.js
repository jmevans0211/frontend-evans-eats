export const getAllRecipes = async () => {
  const response = await fetch('http://localhost:3000/api/v1/recipes/')

  if (!response.ok) {
    throw new Error('Could not get recipes')
  }
  const data = await response.json();

  return data;
}