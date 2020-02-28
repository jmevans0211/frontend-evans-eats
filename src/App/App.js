import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home/Home'
import RecipeForm from './../RecipeForm/RecipeForm';
import {Recipe} from '../Recipe/Recipe';
import './App.scss';
import CategoryDisplay from '../containers/CategoryDisplay/CategoryDisplay';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={ () => <Home /> }/>
      <Route exact path='/category' render={ () => <CategoryDisplay /> } />
      <Route exact path='/recipe' render={ () => <Recipe /> }/>
    </div>
  );
}

export default App;
