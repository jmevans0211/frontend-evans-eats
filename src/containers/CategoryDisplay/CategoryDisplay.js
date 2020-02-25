import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
import RecipeCard from '../../RecipeCard/RecipeCard';
import './CategoryDisplay.scss';

export class CategoryDisplay extends Component {

  render() {
    let { recipesSelected } = this.props
    let recipeCards = recipesSelected.map(recipe => {
      return <RecipeCard key={recipe.recipe_name} recipe_name={recipe.recipe_name} image_url={recipe.image_url}/>
    })

    return (
      <div>
        <Header />
        <section className='categoryDisplay__div--section'>
          {recipeCards}
        </section>
        <Footer />
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  recipesSelected: state.recipesSelected,
});

export default connect(mapStateToProps, null)(CategoryDisplay);
