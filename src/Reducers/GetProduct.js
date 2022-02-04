import { actionTypes } from "../Actions";

const getProductReducer = (product = [], action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
      return action.payload;
    default:
      return product;
  }
};

export default getProductReducer;