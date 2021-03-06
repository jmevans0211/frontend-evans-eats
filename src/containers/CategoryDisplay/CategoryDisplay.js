import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
import RecipeCard from '../../RecipeCard/RecipeCard';
import { showRecipe } from './../../actions/index';
import { connect } from 'react-redux';
import './CategoryDisplay.scss';

export class CategoryDisplay extends Component {
  
  render() {
    let { recipesSelected } = this.props;
    let recipeCards = recipesSelected.map(recipe => {
      return (
        <Link to='/recipe' className='routerLink'>
          <RecipeCard 
            key={recipe.recipe_name}
            recipe_name={recipe.recipe_name} 
            image_url={recipe.image_url}
            id={recipe.id}
          />
        </Link>
      );
    });

    return (
      <div>
        <Header />
        <section className='categoryDisplay__div--section'>
          {recipesSelected.length <= 0 && <img className='pizza_gif' src='https://media.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif'/>}
          {recipeCards}
        </section>
        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDisplay);
