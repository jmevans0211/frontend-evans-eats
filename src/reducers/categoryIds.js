export const categoryIds = (state = null, action) => {
  switch(action.type) {
    case 'STORE_CATEGORY_IDS':
      return action.categoryIds
    default:
      return state
  }
};
