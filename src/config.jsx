import { configureStore } from "@reduxjs/toolkit";
import  favSlice  from "./FavSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";


const persistConfig={
    key:"root",
    version:1,
    storage,
};
const reducer = combineReducers({
    fav: favSlice.reducer 
})

const persistedReducer = persistReducer(persistConfig,reducer)


const store = configureStore({
    reducer: persistedReducer,
})

export default store;