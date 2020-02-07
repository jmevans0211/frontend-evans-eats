export const recipesSelected = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_RECIPES':
      return action.recipesSelected
    default:
      return state
  }
};
