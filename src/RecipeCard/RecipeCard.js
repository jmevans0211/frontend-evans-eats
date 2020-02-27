import React from 'react';
import './RecipeCard.scss'

function RecipeCard({ recipe_name, image_url}) {
  return (
    <div className='recipeCard__div'>
      <h4 className='recipeCard__div--h4'>{recipe_name}</h4>
      <img className='recipeCard__div--img' src={image_url} alt={recipe_name} style ={{width: '300px'}}/>
    </div>
  )
}

export default RecipeCard;