import React, { Component } from 'react';
import Header from '../containers/Header/Header';
import Footer from '../Footer/Footer';

export class Recipe extends Component {
  render() {
    return (
      <div>
        <Header />
          <p>in recipe component!!!!</p>
        <Footer />
      </div>
    )
  }
}