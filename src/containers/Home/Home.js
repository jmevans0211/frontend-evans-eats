import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
import RecipeCard from '../../RecipeCard/RecipeCard';
import { getAllRecipes } from '../../utils/apiCalls/apiCalls';
import { displayRandomRecipes, getCategoryIds } from '../../utils/helpers/helpers';
import { selectRecipes, storeCategoryIds } from './../../actions/index';
import { connect } from 'react-redux';
import './Home.scss';

export class Home extends Component {

  async componentDidMount() {
    const { selectRecipes, storeCategoryIds } = this.props;

    try {
      let recipes = await getAllRecipes();
      let ids = await getCategoryIds(recipes)
      let randomRecipes = await displayRandomRecipes(recipes);
      
      await selectRecipes(randomRecipes);
      await storeCategoryIds(ids)
    } catch (error) {
      console.log(error);
    }
  }


  render () {
    const { recipesSelected } = this.props;
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
})

export const mapDispatchToProps = dispatch => ({
  selectRecipes: recipesSelected => dispatch(selectRecipes(recipesSelected)),
  storeCategoryIds: categoryIds => dispatch(storeCategoryIds(categoryIds))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
