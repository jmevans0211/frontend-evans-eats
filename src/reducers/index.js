import { combineReducers } from 'redux';
import { recipesSelected } from './recipesSelected';
import { categoryIds } from './categoryIds';
import { recipe } from './recipe';

export const rootReducer = combineReducers({
  recipesSelected,
  categoryIds,
  recipe
});
