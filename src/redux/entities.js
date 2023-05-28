import { combineReducers } from "redux";
import productReducer from './reduxSlice/productSlice';


export default combineReducers({
products:productReducer
})