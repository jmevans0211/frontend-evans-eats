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
    const categories = [
      {title: 'Apps', class: 'apps'},
      {title: 'Soups and Salads', class: 'soups_and_salads'},
      {title: 'Meals', class: 'meals'},
      {title: 'Beverages', class: 'beverages'},
      {title: 'Desserts', class: 'desserts'}
    ];

    const navLinks = categories.map(category => {
      return (
        <Link to='/category'>
          <li onClick={() => this.updateRecipesDisplayed(category.class)}>{category.title}</li>
      </Link>
      )
    })

    return (
      <div className="header">
        <div className='header__div--title'>
          <h1>Evans<span>Eats</span></h1>
          <h3><IoMdAddCircleOutline /></h3>
        </div>
        <nav>
          <ul className='header__nav--ul'>
            {navLinks}
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
