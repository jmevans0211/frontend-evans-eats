import React, { Component } from 'react';
import './RecipeCard.scss';
import { showRecipe } from './../../src/actions';
import { connect } from 'react-redux';

export class RecipeCard extends Component {

  findRecipe = (id) => {
    let { recipesSelected, showRecipe } = this.props;
    let recipe = recipesSelected.find(recipe => {
      return recipe.id === id
    });

    showRecipe(recipe);
  };

  render() {
    let { recipe_name, image_url, id } = this.props;
    return (
      <div className='recipeCard__div' onClick={() => this.findRecipe(id)}>
        <h4 className='recipeCard__div--h4'>{recipe_name}</h4>
        <img className='recipeCard__div--img' src={image_url} alt={recipe_name} style ={{width: '300px'}}/>
      </div>
    )

  }
}

export const mapDispatchToProps = dispatch => ({
  showRecipe: recipe => dispatch(showRecipe(recipe))
})

export const mapStateToProps = state => ({
  recipesSelected: state.recipesSelected,
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCard);