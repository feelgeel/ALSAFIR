import React, { useState } from "react";
import prodImg from "../img/hero-small.jpg";
import Popups from "../popups/Popups";
import AddSales from "../manageSales/AddSales";
import { useSelector, useDispatch } from "react-redux";
import {
  handleUpdate,
  hendleDelete,
  handleIncreaseQuant,
  handleDecreaseQuant,
  handleAddProd,
} from "./shoppingListFuctions";

const ShopppingList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.entities.products.list);
  
  let [selectedProd, setselectedProd] = useState({});
  let [chosenCompo, setchosenCompo] = useState(<AddSales />);
  let totalPrice = 0;
  let shoppingList = [
    {
      prodImg,
      prodName: "mounice",
      prodQuant: 1,
      prodPricePerUnit: 30,
    },
    {
      prodImg,
      prodName: "zitoun",
      prodQuant: 1,
      prodPricePerUnit: 30,
    },
  ];
// console.log(chosenCompo);
  return (
    <div className="shoppingList">
      <table style={{ width: "100%" }}>
        <button onClick={() => handleAddProd(setchosenCompo,dispatch, products)}>
          <a href="#popup">add</a>
        </button>

        <button>RESET</button>
        <tr>
          <th>product image </th>
          <th>product name</th>
          <th>quantity</th>
          <th>price per quant</th>
          <th>product price</th>
          {/* <th></th> */}
          <th></th>
        </tr>
        {products.map((dt) => {
          totalPrice += dt.prodPricePerUnit * dt.prodQuant;

          return (
            <tr>
              <td>
                <img width="100px" height="50px" src={dt.prodImg} />
              </td>
              <td>{dt.prodName}</td>
              <td>
                <button
                  onClick={() => handleDecreaseQuant(dt, dispatch, products)}
                >
                  -
                </button>
                {dt.prodQuant}
                <button
                  onClick={() => handleIncreaseQuant(dt, dispatch, products)}
                >
                  +
                </button>
              </td>
              <td>{dt.prodPricePerUnit}</td>
              <td>{dt.prodPricePerUnit * dt.prodQuant}</td>
              {/* <td>
          <button onClick={() => handleUpdate(dt,setchosenCompo,setselectedProd)}>
                      <a href="#popup">update</a>
                    </button>
            </td> */}
              <td>
                <button
                  onClick={() =>
                    hendleDelete(dt, setchosenCompo, setselectedProd)
                  }
                >
                  <a href="#popup">delete</a>
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="totalPrice">
        <span>TOTAL PRICE {totalPrice} DA</span>
        <button>sold</button>
      </div>
      <Popups>{chosenCompo}</Popups>
      {/* <Popups><ProductList/></Popups> */}
    </div>
  );
};

export default ShopppingList;
