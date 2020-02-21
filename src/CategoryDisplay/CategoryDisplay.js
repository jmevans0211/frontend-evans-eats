import React, { Component } from 'react';
import Header from '../containers/Header/Header';
import Footer from './../Footer/Footer';
import RecipeCard from './../RecipeCard/RecipeCard';

export class CategoryDisplay extends Component {

  render() {
    return (
      <div>
        <Header />
        <p>**in CategoryDisplay**</p>
        <Footer />
      </div>
    )
  }
}