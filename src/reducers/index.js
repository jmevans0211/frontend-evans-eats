import { combineReducers } from 'redux';
import { recipesSelected } from './recipesSelected';
import { categoryIds } from './categoryIds';

export const rootReducer = combineReducers({
  recipesSelected,
  categoryIds
});