import React from "react";
import prodImg from "../img/hero-small.jpg"

const RightSide = () => {
  let totalPrice=0
    let products=[
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
    <div className="rightside">
      <table style={{width:"100%"}}>
        <button>ADD</button>
        <tr>
          <th>product image</th>
          <th>product name</th>
          <th>quantity</th>
          <th>price per quant</th>
          <th>product price</th>
        </tr>
        {
          products.map(dt=>{
            totalPrice+=dt.prodPricePerUnit*dt.prodQuant
            
            return <tr>
          <td><img width="100px" height="50px" src={dt.prodImg}/></td>
          <td>{dt.prodName}</td>
          <td>{dt.prodQuant}</td>
          <td>{dt.prodPricePerUnit}</td>
          <td>{dt.prodPricePerUnit*dt.prodQuant}</td>
        </tr>
          }
          )
        }
      </table>
      <div className="totalPrice">
        <span>TOTAL PRICE {totalPrice} DA</span>
        <button>sold</button>
      </div>
    </div>
  );
};

export default RightSide;
