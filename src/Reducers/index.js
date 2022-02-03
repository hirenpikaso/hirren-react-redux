import { combineReducers } from "redux";
import GetProducts from "./GetProducts";

export default combineReducers({
  products: GetProducts
});
