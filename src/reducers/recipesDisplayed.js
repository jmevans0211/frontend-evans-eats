export const recipesDisplayed = (state = [], action) => {
  switch (action.type) {
    case 'DISPLAY_RECIPES':
      return action.recipesDisplayed
    default:
      return state
  }
};
