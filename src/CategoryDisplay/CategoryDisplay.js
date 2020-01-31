import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import RecipeCard from './../RecipeCard/RecipeCard';

export class CategoryDisplay extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    }
  }

  render() {
    return (
      <div>in category container</div>
    )
  }
}