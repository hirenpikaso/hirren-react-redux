import Axios from "../Api/Axios";

export const actionTypes = {
  FETCH_DATA: "FETCH_DATA"
};

export const fetchReqdata = () => async dispatch => {
  const response = await Axios.get("https://aveosoft-react-assignment.herokuapp.com/products");
  dispatch({
    type: actionTypes.FETCH_DATA,
    payload: response.data
  });
};
