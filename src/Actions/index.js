import Axios from "../Api/Axios";

export const actionTypes = {
  FETCH_DATA: "FETCH_DATA",
  FETCH_CATEGORIES: "FETCH_CATEGORIES",
  GET_PRODUCT: "GET_PRODUCT",
};

export const fetchReqdata = () => async dispatch => {
  const response = await Axios.get("https://aveosoft-react-assignment.herokuapp.com/products");
  dispatch({
    type: actionTypes.FETCH_DATA,
    payload: response.data
  });
};
export const fetchCAtegories = () => async dispatch => {
  const catResponse = await Axios.get("https://aveosoft-react-assignment.herokuapp.com/categories");
  dispatch({
    type: actionTypes.FETCH_CATEGORIES,
    payload: catResponse.data
  });
};
export const getProduct = (id) => async dispatch => {
  const getProductV = await Axios.get(`https://aveosoft-react-assignment.herokuapp.com/products/${id}`);
  dispatch({
    type: actionTypes.GET_PRODUCT,
    payload: getProductV.data
  });
};
