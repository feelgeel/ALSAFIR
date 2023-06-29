import *as chosenProductsAction from '../../redux/reduxSlice/chosenProducts';
import *as shoppingListAction from '../../redux/reduxSlice/shoppingList';
export const handleDecreaseQuant = (quantity, setquantity) => {
    let newQuantity = quantity;
    if (newQuantity > 1) {
      newQuantity--;
      setquantity(newQuantity);
    }
    // console.log(newQuantity);
  };
  export const handleIncreaseQuant = (quantity, setquantity) => {
    let newQuantity = quantity;
    newQuantity++;
    setquantity(newQuantity);
    // console.log(newQuantity);
  };
  export const handleQuit=(setaddToChosen)=>{
    setaddToChosen(false)
  }
  export const handleSave=(setaddToChosen,dispatch,chosenProd,quantity)=>{
    let newChosenProd={...chosenProd}
    newChosenProd.prodQuant=quantity
    // console.log(newChosenProd);
  dispatch(shoppingListAction.pushToshoppingList(newChosenProd))
  setaddToChosen(false)
  }