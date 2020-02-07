import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import RecipeCard from '../../RecipeCard/RecipeCard';
import { getAllRecipes } from '../../utils/apiCalls/apiCalls';
import { displayRandomRecipes } from '../../utils/helpers/helpers';
import { selectRecipes } from './../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Home.scss';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      randomRecipes: []
    }
  }

  async componentDidMount() {
    // const { selectRecipes } = this.props
    let randomRecipes = await this.fetchRecipes()
    await this.setState({ randomRecipes })
    // await selectRecipes(recipes)
  }
  
  fetchRecipes = async () => {
    // console.log('props--->', selectRecipes)
    let recipes = await getAllRecipes();
    let randomRecipes = await displayRandomRecipes(recipes)
    return randomRecipes
  }

  render () {
    // const { recipesSelected } = this.props
    let recipeCards = this.state.randomRecipes.map(recipe => {
      return <RecipeCard recipe_name={recipe.recipe_name} image_url={recipe.image_url}/>
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

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    selectRecipes
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)