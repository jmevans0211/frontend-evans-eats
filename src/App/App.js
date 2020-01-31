import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home} from './../Home/Home'
import RecipeFrom from './../RecipeForm/RecipeForm'
import './App.scss';
import { CategoryDisplay } from '../CategoryDisplay/CategoryDisplay';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={ () => <Home /> }/>
      <Route exact path='/category' render={ () => <CategoryDisplay /> } />
    </div>
  );
}

export default App;
