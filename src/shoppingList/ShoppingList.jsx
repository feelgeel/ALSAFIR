import React, { useState } from "react";
import prodImg from "../img/hero-small.jpg";
import Popups from "../popups/Popups";
import AddSales from "../manageSales/AddSales";
import Modal from 'react-modal';
import { useSelector, useDispatch } from "react-redux";
import {
  handleUpdate,
  hendleDelete,
  handleIncreaseQuant,
  handleDecreaseQuant,
  handleAddProd,
  handleReset,
  handleModal,
} from "./shoppingListFuctions";
import ManageQuantity from "../component/manageQuantity/ManageQuantity";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const ShopppingList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.entities.products.list);
  const chosenProds = useSelector((state) => state.entities.chosenProducts.list);
  const shoppingListRedux = useSelector((state) => state.entities.shoppingList.list);
  //modals
  const [addToSalesModal, setaddToSalesModal] =useState(false);
  const [addToChosen, setaddToChosen] =useState(false);
  // 
   let [selectedProd, setselectedProd] = useState({});
   let [shoppingList, setshoppingList] = useState(shoppingListRedux);
  let [chosenCompo, setchosenCompo] = useState(<AddSales  setaddToChosen={setaddToChosen}/>);
  let totalPrice = 0;
// console.log(chosenCompo);


  return (
    <div className="shoppingList">
        <button onClick={() =>handleModal(setaddToSalesModal)}>
          {/* <a href="#popup">add</a> */}
          ADD
        </button>
        <button onClick={()=>handleReset(setshoppingList)}>RESET</button>
        {!shoppingListRedux[0]&&<h2>Shopping List is empty</h2>}
      {shoppingListRedux[0]&&<table style={{ width: "100%" }}>
        <tr>
          <th>product image </th>
          <th>product name</th>
          <th>quantity</th>
          <th>price per quant</th>
          <th>product price</th>
          {/* <th></th> */}
          <th></th>
        </tr>
        {shoppingListRedux.map((dt) => {
          totalPrice += dt.prodPricePerUnit * dt.prodQuant;

          return (
            <tr>
              <td>
                <img width="100px" height="50px" src={dt.prodImg} />
              </td>
              <td>{dt.prodName}</td>
              <td>
                <button
                  onClick={() => handleDecreaseQuant(dt, dispatch, shoppingListRedux)}
                >
                  -
                </button>
                {dt.prodQuant}
                <button
                  onClick={() => handleIncreaseQuant(dt, dispatch, shoppingListRedux)}
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
      <div className="totalPrice">
        <span>TOTAL PRICE {totalPrice} DA</span>
        <button>sold</button>
      </div>
      </table>}

        {/* sales modal */}
        <Modal
      isOpen={addToSalesModal}
      onRequestClose={()=>setaddToSalesModal(false)}
      >
       {chosenCompo}
      </Modal>
      {/* addtochosen */}
        <Modal
      isOpen={addToChosen}
      onRequestClose={()=>setaddToChosen(false)}
      style={customStyles}
      >
      <ManageQuantity setaddToChosen={setaddToChosen}/>
      </Modal>

      {/* <Popups>{chosenCompo}</Popups> */}
      {/* <Popups><ProductList/></Popups> */}
    </div>
  );
};

export default ShopppingList;
