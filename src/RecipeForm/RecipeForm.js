import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postNewRecipe } from '../utils/apiCalls/apiCalls';

export const RecipeForm = ({categoryIds}) => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({
    recipe_name: '',
    approx_time: '',
    ingredients: '',
    instructions: '',
    notes: '',
    image_url: '',
    category_id: 0,
  })

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'evans_eats')
    setLoading(true)
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dhieqoasj/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await response.json()

    setRecipe({
      ...recipe,
      image_url: file.secure_url
    });

    setLoading(false)
  }

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  const saveNewRecipe = async () => {
    await postNewRecipe(recipe)
  }

  return (
    <div>
      <div className='name-container'>
        <label>Recipe Name:</label>
        <input
          name='recipe_name'
          type='text'
          value={recipe.recipe_name}
          onChange={handleChange} 
        />
      </div>
      <div className='approx-time-container'>
        <label>Approx Time:</label>
        <input
          name='approx_time'
          type='text'
          value={recipe.approx_time}
          onChange={handleChange} 
        />
      </div>
      <div className='ingredients-container'>
        <label>Ingredients:</label>
        <input
          name='ingredients'
          type='text'
          value={recipe.ingredients}
          onChange={handleChange} 
        />
      </div>
      <div className='instructions-container'>
        <label>Instructions:</label>
        <input
          name='instructions'
          type='text'
          value={recipe.instructions}
          onChange={handleChange} 
        />
      </div>
      <div className='notes-container'>
        <label>Notes:</label>
        <input
          name='notes'
          type='text'
          value={recipe.notes}
          onChange={handleChange} 
        />
      </div>
      <div className='category-container'>
        <label>Category:</label>
        <select
          onChange={handleChange}
          name='category_id' 
        >
          <option value={0}></option>
          <option value={categoryIds.apps}>Apps</option>
          <option value={categoryIds.soups_and_salads}>Soups and Salads</option>
          <option value={categoryIds.meals}>Meals</option>
          <option value={categoryIds.beverages}>Beverages</option>
          <option value={categoryIds.desserts}>Desserts</option>
        </select>
      </div>
      <div className='upload-image-container'>
        <label>Upload Image:</label>
        <input 
          type="file"
          name="file"
          placeholder="Upload recipe image"
          onChange={uploadImage}
        />
        {loading ? (
          <h3>Loading image...</h3>
        ): (
          <img src={recipe.image_url} style ={{width: '300px'}} />
        )}
      </div>
      <button onClick={saveNewRecipe}>Save Recipe</button>
    </div>
  )
};

const mapStateToProps = state => ({
  categoryIds: state.categoryIds
})

export default connect(mapStateToProps, null)(RecipeForm);

