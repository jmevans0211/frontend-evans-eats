import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipesByCategory } from './../../utils/apiCalls/apiCalls';
import { selectRecipes, clearRecipes } from './../../actions/index';

import './Header.scss';

export class Header extends Component {

  updateRecipesDisplayed = async (category) => {
    const { categoryIds, selectRecipes, clearRecipes } = this.props;
    let recipes = await getRecipesByCategory(categoryIds[category])

    await clearRecipes()
    await selectRecipes(recipes)
  }

  render () {

    return (
      <div className="Header">
        <h1>Evans<span>Eats</span></h1>
        <div>
          <h3>+</h3>
          <ul>
            <Link to='/category'>
              <li onClick={() => this.updateRecipesDisplayed('apps')}>Apps</li>
            </Link>
            <Link to='/category'>
              <li onClick={() => this.updateRecipesDisplayed('soups_and_salads')}>Soups and Salads</li>
            </Link>
            <Link to='/category'>
              <li onClick={() => this.updateRecipesDisplayed('meals')}>Meals</li>
            </Link>
            <Link to='/category'>
              <li onClick={() => this.updateRecipesDisplayed('beverages')}>Beverages</li>
            </Link>
            <Link to='/category'>
              <li onClick={() => this.updateRecipesDisplayed('desserts')}>Desserts</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
  }


export const mapDispatchToProps = dispatch => ({
  selectRecipes: recipesSelected => dispatch(selectRecipes(recipesSelected)),
  clearRecipes: () => dispatch(clearRecipes())
  }
)

export const mapStateToProps = state => ({
  categoryIds: state.categoryIds
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
