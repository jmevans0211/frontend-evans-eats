import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';
import RecipeCard from '../../RecipeCard/RecipeCard';
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay';
import { getAllRecipes } from '../../utils/apiCalls/apiCalls';
import { displayRandomRecipes, getCategoryIds } from '../../utils/helpers/helpers';
import { selectRecipes, storeCategoryIds, clearRecipes } from './../../actions/index';
import { connect } from 'react-redux';
import './Home.scss';

export class Home extends Component {

  async componentDidMount() {
    const { selectRecipes, storeCategoryIds, clearRecipes } = this.props;

    try {
      let recipes = await getAllRecipes();
      let ids = await getCategoryIds(recipes);
      let randomRecipes = await displayRandomRecipes(recipes);
      
      await clearRecipes()
      await selectRecipes(randomRecipes);
      await storeCategoryIds(ids);
    } catch (error) {
      console.log(error);
    }
  }


  render () {
    return (
      <CategoryDisplay />
    );
  }
};

export const mapStateToProps = state => ({
  recipesSelected: state.recipesSelected,
});

export const mapDispatchToProps = dispatch => ({
  selectRecipes: recipesSelected => dispatch(selectRecipes(recipesSelected)),
  storeCategoryIds: categoryIds => dispatch(storeCategoryIds(categoryIds)),
  clearRecipes: () => dispatch(clearRecipes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
