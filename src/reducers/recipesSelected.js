export const recipesSelected = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_RECIPES':
      return [...state, action.recipesSelected]
    default:
      return state
  }
};
