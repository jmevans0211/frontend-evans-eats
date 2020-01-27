import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import { getAllRecipes } from './../utils/apiCalls/apiCalls';
import { displayRandomRecipes } from './../utils/helpers/helpers';
import './Home.scss';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      randomRecipes: []
    }
  }

  componentDidMount() {
    this.fetchRecipes()
  }
  
  fetchRecipes = async () => {
    let recipes = await getAllRecipes();
    let randomRecipes = await displayRandomRecipes(recipes)
    await this.setState({ randomRecipes })
  }

  render () {
    console.log(this.state.randomRecipes)
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

