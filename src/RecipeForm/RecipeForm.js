import React, { useState } from 'react';

function RecipeForm() {
  const [image, setImage] = useState('')
  const[loading, setLoading] = useState(false)

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

  return (
    <div>
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
  )
};

export default RecipeForm;

