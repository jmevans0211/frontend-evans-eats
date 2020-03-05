export const recipe = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_RECIPE':
      return action.recipe
    default:
      return state
  }
};