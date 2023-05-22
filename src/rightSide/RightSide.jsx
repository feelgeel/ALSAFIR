import React from "react";
import prodImg from "../img/hero-small.jpg"

const RightSide = () => {
    let products={

    }
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
        <tr>
          <td><img width="100px" height="50px" src={prodImg}/></td>
          <td>mounise</td>
          <td>5</td>
          <td>30 DA</td>
          <td>150 DA</td>
        </tr>
        <tr>
        <td>mounise</td>
        <td>mounise</td>
          <td>5</td>
          <td>30 DA</td>
          <td>150 DA</td>
        </tr>
      </table>
      <div className="totalPrice">
        <span>TOTAL PRICE 500 DA</span>
      </div>
    </div>
  );
};

export default RightSide;
