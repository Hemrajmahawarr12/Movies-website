import { Input } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";



const favSlice = createSlice({
    name:"fav",
    initialState:{
        bollyfav:[],
        hollyfav:[],
        bollyWood:[],
        hollyWood:[],
        Pathname:"",
        addBollywoddInput:[],
        addHollywoddInput:[]
    },
    reducers:{
        bollyfav(state,action){
            console.log("🚀 ~ bollyfav ~ actionvvcvcvcvcvcxvcvcvcvcvxvc:",action.payload)
            state.bollyfav = action.payload;
         },
         hollyfav(state,action){
            state.hollyfav = action.payload
            console.log("hollyFavvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv",action.payload)
         },
         addBollywoddInput(state,action){
            // state.push(action.payload);
            const bollydata = action.payload
            state.bollyWood = [state.bollyWood,bollydata];
         },
         addHollywoddInput(state,action){
            // state.push(action.payload);
            const hollydata = action.payload;
            state.hollyWood = [state.hollyWood, hollydata];
         },
        addPathname(state,action){
            // state.push(action.payload);
            state.Pathname = action.payload;
            
         },
        removebollyfav(state,action){ 
            console.log("removeBollywodd",action);
      //  state.bollyfav = action.payload
            const index = state.bollyfav.findIndex((stat)=> stat.Title === action.payload.Title)
            state.bollyfav.splice(index,1)
        },
        removehollyFav(state,action){ 
            const index = state.hollyfav.findIndex((stat)=> stat.Title === action.payload.Title)
            state.hollyfav.splice(index,1)
        },
        ClearAllUser(state,action){ 
            // console.log(state,action)
            return [];
        }
    }
});


export default favSlice;
export const {addPathname,addBollywoddInput,addHollywoddInput,bollyfav,hollyfav,removebollyfav,removehollyFav} = favSlice.actions;