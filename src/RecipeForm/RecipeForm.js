import React, { useState, useEffect } from 'react';

function RecipeForm() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({
    recipeName: '',
    approxTime: '',
    ingredients: '',
    instructions: '',
    notes: '',
    category: '',
    categoryId: '',
    imageUrl: ''
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
      imageUrl: file.secure_url
    });

    // setImage(file.secure_url)
    setLoading(false)
  }

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className='name-container'>
        <label>Recipe Name:</label>
        <input
          name='recipeName'
          type='text'
          value={recipe.recipeName}
          onChange={handleChange} 
        />
      </div>
      <div className='approx-time-container'>
        <label>Approx Time:</label>
        <input
          name='approxTime'
          type='text'
          value={recipe.approxTime}
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
          name='category' 
        >
          <option value=''></option>
          <option value='apps'>Apps</option>
          <option value='soups_and_salads'>Soups and Salads</option>
          <option value='meals'>Meals</option>
          <option value='beverages'>Beverages</option>
          <option value='desserts'>Desserts</option>
        </select>
      </div>
      <div className='upload-image-container'>
        <h1>Upload Image</h1>
        <input 
          type="file"
          name="file"
          placeholder="Upload recipe image"
          onChange={uploadImage}
        />
        {loading ? (
          <h3>Loading image...</h3>
        ): (
          <img src={image} style ={{width: '300px'}} />
        )}
      </div>
    </div>
  )
};

export default RecipeForm;

