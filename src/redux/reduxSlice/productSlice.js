import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"products",
     initialState:{
        list: [ 
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
        ],
        },
     reducers:{
        modifyProducts:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {modifyProducts}=slice.actions;
