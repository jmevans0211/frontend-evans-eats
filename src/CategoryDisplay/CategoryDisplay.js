import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../containers/Header/Header';
import Footer from './../Footer/Footer';
import RecipeCard from './../RecipeCard/RecipeCard';

export class CategoryDisplay extends Component {

  render() {
    let { recipesSelected } = this.props
    let recipeCards = recipesSelected.map(recipe => {
      return <RecipeCard key={recipe.recipe_name} recipe_name={recipe.recipe_name} image_url={recipe.image_url}/>
    })

    return (
      <div>
        <Header />
        {recipeCards}
        <Footer />
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  recipesSelected: state.recipesSelected,
});

export default connect(mapStateToProps, null)(CategoryDisplay);
