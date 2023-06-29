import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewCard from "../component/card/NewCard";
import *as chosenProdAction from '../redux/reduxSlice/chosenProd';
export default function AddSales({setaddToChosen}) {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.entities.products.list);
  const chosenProd = useSelector((state) => state.entities.chosenProd.list);
  const chosenProducts = useSelector((state) => state.entities.chosenProducts.list);
  const shoppingList = useSelector((state) => state.entities.shoppingList.list);
  const[prodDb,setprodDb]=useState(products);
  let newProdDb=[...prodDb]
  const handleAddToList=(item)=>{
    dispatch(chosenProdAction.setChosenProd(item))
    setaddToChosen(true)
  // console.log(item);
  }
  return (
    <div className="addsales">
      <div className="productList">
        {prodDb.map((item) => {
          return <NewCard onclick={()=>handleAddToList(item)} data={item}  />;
        })}
      </div>
        
      <div className="chosenList">
      {shoppingList.map((item) => {
          return <NewCard data={item} />;
        })}
      </div>
    </div>
  );
}
