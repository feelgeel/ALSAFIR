import {createSlice } from "@reduxjs/toolkit";
import prodImg from "../../img/hero.jpg";



 //create slice
 const slice=createSlice({
     name:"shoppingList",
     initialState:{
        list: [],
        },
     reducers:{
        pushToshoppingList:(listName,action)=>{
            listName.list.push(action.payload)
       },
        modifyshoppingList:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {pushToshoppingList,modifyshoppingList}=slice.actions;
