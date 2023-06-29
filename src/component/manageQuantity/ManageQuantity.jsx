import React, { useState } from "react";
import NewCard from "../card/NewCard";
import { useDispatch, useSelector } from "react-redux";
import { handleDecreaseQuant, handleIncreaseQuant,
   handleQuit, handleSave } from "./manageQuantityFuncs";

export default function ManageQuantity({setaddToChosen}) {
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const chosenProd = useSelector((state) => state.entities.chosenProd.list);
  const shoppingList = useSelector((state) => state.entities.shoppingList.list);
  // console.log(shoppingList);

  return (
    <div>
      <NewCard data={chosenProd} />
      <div style={{ textAlign: "center" }}>
        <button onClick={() => handleDecreaseQuant(quantity, setquantity)}>-</button>
        {quantity}
        <button onClick={() => handleIncreaseQuant(quantity, setquantity)}>+</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={()=>handleQuit(setaddToChosen)}>Quit</button>
        <button onClick={()=>handleSave(setaddToChosen,dispatch,chosenProd,quantity)}>Save</button>
      </div>
    </div>
  );
}
