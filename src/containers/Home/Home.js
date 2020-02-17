import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import RecipeCard from '../../RecipeCard/RecipeCard';
import { getAllRecipes } from '../../utils/apiCalls/apiCalls';
import { displayRandomRecipes } from '../../utils/helpers/helpers';
import { selectRecipes, getCategoryIds } from './../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomRecipes: []
    }
  }

  async componentDidMount() {
    const { selectRecipes } = this.props;

    try {
      let recipes = await getAllRecipes();
      let randomRecipes = await displayRandomRecipes(recipes);

      await selectRecipes(randomRecipes);
    } catch (error) {
      console.log(error);
    }
  }

  // storeIds = (recipes) => {
  //   const { getCategoryIds } = this.props
  //   let categoryIds = recipes.map(recipe => {
  //     return recipe.category_id
  //   })

  //   getCategoryIds(categoryIds);
  // }
  
  // fetchRecipes = async () => {
  //   return randomRecipes
  // }

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
  selectRecipes: recipesSelected => dispatch(selectRecipes(recipesSelected))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
