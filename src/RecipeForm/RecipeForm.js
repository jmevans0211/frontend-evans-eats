import React, { useState, useEffect } from 'react';

function RecipeForm() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeName, setRecipeName] = useState('');
  const [approxTime, setApproxTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [notes, setNotes] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, categoryUrl] = useState('');
  const [categoryId, setCategoryId] = useState('')

// look in helper function to find category ids for the post

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

    setImage(file.secure_url)
    setLoading(false)
  }

  const handleRecipeName = (name) => {
    setRecipeName(name)
  }

  return (
    <div>
      <div className='input-name-container'>
        <label>Recipe Name:</label>
        <input 
          type='text'
          onChange={(e) => handleRecipeName(e.target.value)} 
        />
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

