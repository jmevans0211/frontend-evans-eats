import React from 'react';

function RecipeCard({ recipe_name, image_url}) {
  return (
    <div>
      <h4>{recipe_name}</h4>
      <img src={image_url} alt={recipe_name} style ={{width: '300px'}}/>
    </div>
  )
}

export default RecipeCard;