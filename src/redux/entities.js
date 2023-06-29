import { combineReducers } from "redux";
import productReducer from './reduxSlice/productSlice';
import chosenProdReducer from './reduxSlice/chosenProd';
import chosenProductsReducer from './reduxSlice/chosenProducts';
import shoppingListReducer from './reduxSlice/shoppingList';


export default combineReducers({
products:productReducer,
chosenProd:chosenProdReducer,
chosenProducts:chosenProductsReducer,
shoppingList:shoppingListReducer,
})