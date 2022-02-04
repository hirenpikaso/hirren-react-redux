import { combineReducers } from "redux";
import GetCategories from "./GetCategories";
import GetProducts from "./GetProducts";
import GetProduct from "./GetProduct";

export default combineReducers({
  products: GetProducts,
  categories: GetCategories,
  product: GetProduct
});
