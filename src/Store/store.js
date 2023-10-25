import { configureStore } from "@reduxjs/toolkit";
import CarReducer from "../Feature/carSlice"
// import SearchReducer from "../Feature/searchSlice"
export const store=configureStore({
    reducer:{
        cars:CarReducer,
       
    }
})