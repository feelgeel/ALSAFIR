import React from "react";
import prodImg from "../img/hero-small.jpg"
import Popups from "../popups/Popups";
const ShopppingList = () => {
  let totalPrice=0
    let shoppingList=[
      {
      prodImg,
      prodName:"mounice",
      prodQuant:1,
      prodPricePerUnit:30,
    },
      {
        prodImg,
        prodName:"zitoun",
        prodQuant:1,
        prodPricePerUnit:30,
    },
  ]
  return (
    <div className="shoppingList">
      <table style={{width:"100%"}}>
      <a href="#popup">add</a>
        <button>RESET</button>
        <tr>
          <th>product image</th>
          <th>product name</th>
          <th>quantity</th>
          <th>price per quant</th>
          <th>product price</th>
          <th></th>
          <th></th>
        </tr>
        {
          shoppingList.map(dt=>{
            totalPrice+=dt.prodPricePerUnit*dt.prodQuant
            
            return <tr>
          <td><img width="100px" height="50px" src={dt.prodImg}/></td>
          <td>{dt.prodName}</td>
          <td>{dt.prodQuant}</td>
          <td>{dt.prodPricePerUnit}</td>
          <td>{dt.prodPricePerUnit*dt.prodQuant}</td>
          <td><button>Update</button></td>
          <td><button>Delete</button></td>
        </tr>
          }
          )
        }
      </table>
      <div className="totalPrice">
        <span>TOTAL PRICE {totalPrice} DA</span>
        <button>sold</button>
      </div>
      <Popups/>
    </div>
  );
};

export default ShopppingList;
