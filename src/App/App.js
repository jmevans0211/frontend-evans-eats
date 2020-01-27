import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './../Home/Home'
import RecipeFrom from './../RecipeForm/RecipeForm'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={ () => <Home /> }/>
    </div>
  );
}

export default App;
