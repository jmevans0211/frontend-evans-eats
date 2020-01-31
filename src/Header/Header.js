import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RecipeFrom from './../RecipeForm/RecipeForm';
import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <h1>Evans<span>Eats</span></h1>
      <div>
        <h3>+</h3>
        <ul>
          <Link to='/category'>
            <li>Apps</li>
          </Link>
          <Link to='/category'>
            <li>Soups and Salads</li>
          </Link>
          <Link to='/category'>
            <li>Meals</li>
          </Link>
          <Link to='/category'>
            <li>Beverages</li>
          </Link>
          <Link to='/category'>
            <li>Desserts</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
