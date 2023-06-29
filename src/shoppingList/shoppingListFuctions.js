import AddSales from "../manageSales/AddSales";
import DeleteSales from "../manageSales/DeleteSales";
import UpdateSales from "../manageSales/UpdateSales";
import ProductList from "../productsList/ProductList";
import *as shoppingListAction from '../redux/reduxSlice/shoppingList';
export const handleModal=(setaddToSalesModal)=>{
  setaddToSalesModal(true)
}
export const handleReset=()=>{

}
export const handleUpdate = (dt,setchosenCompo,setselectedProd) => {
    // console.log(dt);
    setchosenCompo(<UpdateSales updatedSales={dt} />);
    setselectedProd(dt);
  };
export const handleAddProd = (setchosenCompo,dispatch,products) => {
  setchosenCompo(<AddSales  setchosenCompo={setchosenCompo}/>);
  };
  export const hendleDelete = (dt,setchosenCompo,setselectedProd) => {
    setchosenCompo(<DeleteSales deletedSales={dt} />);
    setselectedProd(dt);
  };
  export const handleIncreaseQuant = (dt,dispatch,shoppingListRedux) => {
    let newshoppingListRedux=[...shoppingListRedux]
    let index=newshoppingListRedux.findIndex(chosen=>chosen.prodName==dt.prodName)
    let newChosen=newshoppingListRedux.filter(chosen=>chosen.prodName==dt.prodName)
    newChosen=newChosen[0]
    newChosen={...newChosen};
    newChosen.prodQuant=newChosen.prodQuant+1
    newshoppingListRedux[index]=newChosen
    dispatch(shoppingListAction.modifyshoppingList(newshoppingListRedux));
// console.log(newChosen,index);
  };
  export const handleDecreaseQuant = (dt,dispatch,shoppingListRedux) => {
    let newshoppingListRedux=[...shoppingListRedux]
    let index=newshoppingListRedux.findIndex(chosen=>chosen.prodName==dt.prodName)
    let newChosen=newshoppingListRedux.filter(chosen=>chosen.prodName==dt.prodName)
    newChosen=newChosen[0]
    newChosen={...newChosen};
    if(newChosen.prodQuant>1){
        newChosen.prodQuant=newChosen.prodQuant-1
    }
    newshoppingListRedux[index]=newChosen
    dispatch(shoppingListAction.modifyshoppingList(newshoppingListRedux));
// console.log(dt);
  };