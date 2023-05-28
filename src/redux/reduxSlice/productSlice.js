import {createSlice } from "@reduxjs/toolkit";



 //create slice
 const slice=createSlice({
     name:"products",
     initialState:{
        list: [],
        },
     reducers:{
        addProducts:(listName,action)=>{
            listName.list=action.payload
       },
        
     }
 })

export default  slice.reducer;
export const {addProducts}=slice.actions;
