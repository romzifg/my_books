import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import createBook from "./createBook";

const reducer = combineReducers({
  homeReducer,
  createBook,
});

export default reducer;
