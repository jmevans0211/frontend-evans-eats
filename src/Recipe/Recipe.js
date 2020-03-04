import React, { Component } from 'react';
import Header from '../containers/Header/Header';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';

export class Recipe extends Component {
  render() {
    console.log(this.props)
    let { recipe_name, id, approx_time, instructions, ingredients, notes, image_url, category, category_id } = this.props.recipe
    return (
      <div>
        <Header />
          <section className='recipe__div--setion'>
            <div>
              <h4>{recipe_name}</h4>
              <p>{category_id}</p>
              <p>{approx_time}</p>
            </div>
            <body>
              <div>
                <div>
                  <h3>Ingredients</h3>
                  <p>{ingredients}</p>
                </div>
                <div>
                  <h3>Instructions</h3>
                  <p>{instructions}</p>
                </div>
              </div>
              <img src={image_url} width={400}/>
            </body>
          </section>
        <Footer />
      </div>
    )
  }
};

export const mapStateToProps = state => ({
  recipe: state.recipe,
});


export default connect(mapStateToProps, null)(Recipe);