export const recipe = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_RECIPE':
      console.log('in reducer--->', action)
      return action.recipe
    default:
      return state
  }
};