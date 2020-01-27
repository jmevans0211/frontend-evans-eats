import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipeFrom from './../RecipeForm/RecipeForm';
import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <h1>Evans<span>Eats</span></h1>
      <div>
        <h3>+</h3>
        <select>
          <option>Apps</option>
          <option>Soups and Salads</option>
          <option>Meals</option>
          <option>Beverages</option>
          <option>Desserts</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
