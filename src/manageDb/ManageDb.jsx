import React from "react";
import prodImg from "../img/hero-small.jpg";
import Popups from "../popups/Popups";

import AddToDb from "./AddToDb";
import UpdateDb from "./UpdateDb";
import DeleteDB from "./DeleteDB";
import { useState } from "react";
export default function ManageDb() {
  let [selectedProd, setselectedProd] = useState({});
  let [chosenCompo, setchosenCompo] = useState(<AddToDb />);
  
  // switch (status) {
  //   case "add":
  //     setchosenCompo(<AddToDb />);
  //     break;
  //   case "update":
  //     setchosenCompo(<UpdateDb/>);
  //     break;
  //   case "delete":
  //     setchosenCompo(<DeleteDB/>);
  //     break;

  //   default:
  //     break;
  // }
  let products = [
    {
      prodImg,
      prodName: "mounice",
      price: 30,
    },
    {
      prodImg,
      prodName: "zitoun",
      price: 30,
    },
  ];
  const handleUpdate = (dt) => {
    console.log(dt);
    setchosenCompo(<UpdateDb updatedDt={dt} />);
    setselectedProd(dt);
  };
  const hendleDelete = (dt) => {
    setchosenCompo(<DeleteDB deletedDb={dt} />);
    setselectedProd(dt);
  };
  // console.log(chosenCompo)
  return (
    <div>
      <div className="shoppingList">
        <table style={{ width: "100%" }}>
          <a href="#popup">add</a>
          <button>RESET</button>
          <thead>
            <tr>
              <th> image</th>
              <th> name</th>
              <th>price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {products.map((dt) => {
            return (
              <tbody>
                <tr>
                  <td>
                    <img width="100px" height="50px" src={dt.prodImg} />
                  </td>
                  <td>{dt.prodName}</td>
                  <td>{dt.price}</td>
                  <td>
                    <button onClick={() => handleUpdate(dt)}>
                      <a href="#popup">update</a>
                    </button>
                  </td>
                  <td>
                    <button onClick={() => hendleDelete(dt)}>
                       <a href="#popup">delete</a></button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <Popups>{chosenCompo}</Popups>
    </div>
  );
}
