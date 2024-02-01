import { Input } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";



const favSlice = createSlice({
    name: "fav",
    initialState: {
        bollyfav: [],
        hollyfav: [],
        bollyWood: [],
        hollyWood: [],
        Pathname: "",
        addBollywoddInput: [],
        addHollywoddInput: [],
        editBolly: [],
        editbutton:false,
        Search:[]
    },
    reducers: {
        bollyfav(state, action) {
            state.bollyfav = action.payload;
           
        },
        hollyfav(state, action) {
            state.hollyfav = action.payload
            
        },
        addBollywoddInput:(state, action) => {
            const existingMovieIndex = state.bollyWood.findIndex((item) => item.id === action.payload.id);
        
            if (existingMovieIndex !== -1) {
              state.bollyWood[existingMovieIndex] = action.payload;

            } else {
              state.bollyWood.push(action.payload);
            }
          },
        addHollywoddInput(state, action) {
            // state.push(action.payload);
            // const hollydata = action.payload;
            
            // state.hollyWood = [...state.hollyWood, hollydata];
           const index =  state.hollyWood.findIndex((item) => item.id === action.payload.id);
          if(index !== -1){
            state.hollyWood[index] = action.payload;
          }else{
            state.hollyWood.push(action.payload)
          }

        },
        addPathname(state, action) {
            // state.push(action.payload);
            state.Pathname = action.payload;

        },
        removebollyfav(state, action) {
            // console.log("removeBollywodd", action);
            //  state.bollyfav = action.payload
            const index = state.bollyfav.findIndex((stat) => stat.Title === action.payload.Title)
            state.bollyfav.splice(index, 1)
        },
        removehollyFav(state, action) {
            const index = state.hollyfav.findIndex((stat) => stat.Title === action.payload.Title)
            state.hollyfav.splice(index, 1)
        },
        removebollyCart(state, action) {
            console.log(action.payload.id)
            const index = state.bollyWood.filter((stat) => stat.id !== action.payload.id)
            state.bollyWood = index;
            // state.bollyWood.splice(index, 1)
            // console.log("fvfvfvfvv..=====", action.payload);

            // console.log("neeeewwwwww", action);
        },
        removehollyCart(state, action){
            console.log("removehollycart",action.payload.id);
            const index = state.hollyWood.filter((stat) => stat.id !== action.payload.id)
            state.hollyWood = index
            // console.log("fvfvfvfvv..=====", action.payload);

            // console.log("neeeewwwwww", action);
        },
        editBolly(state, action) {
            console.log("edddddddddddddddddddddddddd",action.payload);
            state.editBolly = action.payload;
        },
        edit(state, action) {
            state.editbutton = action.payload
            // console.log("newDispatch",action);
            // state.editBolly = action.payload;
        },
        bollyedit(state, action) {
            // state.editbutton = action.payload
            const index = state.bollyWood.findIndex((stat) => stat.id === action.payload.id)
            console.log("bollyedit-=========",index);
            // state.editBolly = action.payload;
        },
        searchSlice(state,action){
            // console.log(action);
            state.Search=action.payload;
        },
        ClearAllUser(state, action) {
            // console.log(state,action)
            return [];
        }
    }
});


export default favSlice;
export const {searchSlice, addPathname,removehollyCart,bollyedit, addBollywoddInput, addHollywoddInput, bollyfav, hollyfav, removebollyfav, removehollyFav, removebollyCart, editBolly,edit,} = favSlice.actions;