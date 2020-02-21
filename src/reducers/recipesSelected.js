export const recipesSelected = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_RECIPES':
      return [...state, ...action.recipesSelected];
    case 'CLEAR_RECIPES':
      return state = []
    default:
      return state
  }
};
