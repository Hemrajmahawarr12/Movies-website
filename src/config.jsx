import { configureStore } from "@reduxjs/toolkit";
import  FavSlice  from "./FavSlice";



const store = configureStore({
    reducer:{
        fav: FavSlice.reducer
    }
})

export default store;