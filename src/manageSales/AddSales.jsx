import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NewCard from "../component/card/NewCard";
export default function AddSales() {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.entities.products.list);
  const handleAddToList=(item)=>{
  console.log(item);
  }
  return (
    <div className="addsales">
      <div className="productList">
        {products.map((item) => {
          return <NewCard onclick={()=>handleAddToList(item)} data={item} />;
        })}
      </div>
      <div className="chosenList">chosen</div>
    </div>
  );
}
