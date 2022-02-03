import reducers from "./Reducers";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export const middlewares = [ReduxThunk];

const createStorewithMiddleWare = applyMiddleware(...middlewares)(createStore);

export default createStorewithMiddleWare(reducers);
