import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";


const getLocalCartData=()=>{
 let localData = localStorage.getItem("Hemraj")
 if(localData==[]){
    return []
 }else{
    return JSON.parse(localData)
 }

 }



const favSlice = createSlice({
    name:"fav",
    initialState:getLocalCartData(),
    reducers:{
        addFav(state,action){
            // state.push(action.payload);
            state.push(action.payload)
            // console.log(state,action)
            
         },
        removeFav(state,action){ 
            const index = state.findIndex((stat)=> stat.Title === action.payload.Title)
            state.splice(index,1)
        },
        ClearAllUser(state,action){ 
            // console.log(state,action)
            return [];
        }
    }
});

export default favSlice;
export const {addFav,removeFav,ClearAllUser} = favSlice.actions;