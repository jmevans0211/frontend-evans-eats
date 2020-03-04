export const recipe = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_RECIPE':
      return action.recipe
    default:
      return state
  }
};