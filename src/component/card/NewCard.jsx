import React from "react";

export default function NewCard({data,onclick}) {
  // console.log(data);
  return (
    <div onClick={onclick} className="newCard">
      <div className="imgCard">
        <img width="100%" height="100%" src={data.prodImg} alt="" />
      </div>
      <div className="infoCard">
        {data.prodName &&<h2>Name:{data.prodName}</h2>}
        {data.prodPricePerUnit &&<h2>Price:{data.prodPricePerUnit}</h2>}
        {data.prodQuant &&<h2>quantity:{data.prodQuant}</h2>}
      </div>
    </div>
  );
}
