import React from "react";

export default function NewCard({data,onclick}) {
  // console.log(data);
  return (
    <div onClick={onclick} className="newCard">
      <div className="imgCard">
        <img width="100%" height="100%" src={data.prodImg} alt="" />
      </div>
      <div className="infoCard">
        <h2>{data.prodName}</h2>
        <h2>{data.prodPricePerUnit}</h2>
      </div>
    </div>
  );
}
