import {createSlice } from "@reduxjs/toolkit";



 //create slice
 const slice=createSlice({
     name:"products",
     initialState:{
        list: [],
        },
     reducers:{
         addListName:(listName,action)=>{
             listName.list=action.payload
        },
         pushListName:(listName,action)=>{
             listName.list.push(action.payload)
        },
        addProducts:(listName,action)=>{
            listName.listproducts=action.payload
        },
         pushProducts:(listName,action)=>{
             listName.listproducts.push(action.payload)
        },
         setTheList:(listName,action)=>{
             listName.theList=action.payload
        },
         setTheProd:(listName,action)=>{
             listName.theProd=action.payload
        },
         setTheChosen:(listName,action)=>{
             listName.theChosen=action.payload
        },
         pushTheChosen:(listName,action)=>{
             listName.theChosen.push(action.payload)
        },
        
     }
 })

export default  slice.reducer;
export const {addListName,pushListName,addProducts,pushProducts,setTheList,
            setTheProd,setTheChosen,pushTheChosen}=slice.actions;
