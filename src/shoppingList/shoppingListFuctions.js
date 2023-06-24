import AddSales from "../manageSales/AddSales";
import DeleteSales from "../manageSales/DeleteSales";
import UpdateSales from "../manageSales/UpdateSales";
import ProductList from "../productsList/ProductList";
import *as productsAction from '../redux/reduxSlice/productSlice';
export const handleUpdate = (dt,setchosenCompo,setselectedProd) => {
    // console.log(dt);
    setchosenCompo(<UpdateSales updatedSales={dt} />);
    setselectedProd(dt);
  };
export const handleAddProd = (setchosenCompo,dispatch,products) => {
  setchosenCompo(<AddSales />);
  };
  export const hendleDelete = (dt,setchosenCompo,setselectedProd) => {
    setchosenCompo(<DeleteSales deletedSales={dt} />);
    setselectedProd(dt);
  };
  export const handleIncreaseQuant = (dt,dispatch,products) => {
    let newProd=[...products]
    let index=newProd.findIndex(chosen=>chosen.prodName==dt.prodName)
    let newChosen=newProd.filter(chosen=>chosen.prodName==dt.prodName)
    newChosen=newChosen[0]
    newChosen={...newChosen};
    newChosen.prodQuant=newChosen.prodQuant+1
    newProd[index]=newChosen
    dispatch(productsAction.modifyProducts(newProd));
// console.log(newChosen,index);
  };
  export const handleDecreaseQuant = (dt,dispatch,products) => {
    let newProd=[...products]
    let index=newProd.findIndex(chosen=>chosen.prodName==dt.prodName)
    let newChosen=newProd.filter(chosen=>chosen.prodName==dt.prodName)
    newChosen=newChosen[0]
    newChosen={...newChosen};
    if(newChosen.prodQuant>1){
        newChosen.prodQuant=newChosen.prodQuant-1
    }
    newProd[index]=newChosen
    dispatch(productsAction.modifyProducts(newProd));
// console.log(dt);
  };