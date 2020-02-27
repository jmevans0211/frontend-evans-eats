import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRecipesByCategory } from './../../utils/apiCalls/apiCalls';
import { selectRecipes, clearRecipes } from './../../actions/index';
import { IoMdAddCircleOutline } from 'react-icons/io';
import './Header.scss';

export class Header extends Component {

  updateRecipesDisplayed = async (category) => {
    const { categoryIds, selectRecipes, clearRecipes } = this.props;

    try {
      let recipes = await getRecipesByCategory(categoryIds[category])
  
      await clearRecipes()
      await selectRecipes(recipes)
    } catch (error) {
      console.log('error in updateRecipesDisplayed', error)
    }
  }

  render () {

    return (
      <div className="header">
        <div className='header__div--title'>
          <h1>Evans<span>Eats</span></h1>
          <h3><IoMdAddCircleOutline /></h3>
        </div>
        <nav>
          <ul className='header__nav--ul'>
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
        </nav>
      </div>
    );
  }
  }


export const mapDispatchToProps = dispatch => ({
  selectRecipes: recipesSelected => dispatch(selectRecipes(recipesSelected)),
  clearRecipes: () => dispatch(clearRecipes())
})

export const mapStateToProps = state => ({
  categoryIds: state.categoryIds
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
