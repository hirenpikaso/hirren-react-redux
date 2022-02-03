import { actionTypes } from "../Actions";

const getProductsReducer = (products = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return action.payload;
    default:
      return products;
  }
};

export default getProductsReducer;