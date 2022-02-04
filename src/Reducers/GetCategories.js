import { actionTypes } from "../Actions";

const getCategoriesReducer = (categories = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES:
      return action.payload;
    default:
      return categories;
  }
};

export default getCategoriesReducer;