export const categoryIds = (state = [], action) => {
  switch(action.type) {
    case 'GET_CATEGORY_IDS':
      return action.categoryIds
    default:
      return state
  }
};
