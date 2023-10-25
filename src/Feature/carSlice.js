import { createSlice as reduxCreateSlice, nanoid } from '@reduxjs/toolkit';
import Cardata from "../Cardata"

const initialState={
    cars:Cardata,
    searchItem:"",
    pageNumber:"1"
}

export const carSlice=reduxCreateSlice({
    name:"cars",
    initialState,
    reducers:{
        showcars:(state, action)=>{
            const car = {
                id: nanoid(),
                cars: action.payload
            };
            state.cars.push(car);
        },
        searchitem:(state,action)=>{
            state.searchItem=action.payload
        },
        setPage:(state,action)=>{
            state.pageNumber=action.payload
        }
    }
})

export const { showcars,searchitem,setPage} = carSlice.actions;
export default carSlice.reducer;

