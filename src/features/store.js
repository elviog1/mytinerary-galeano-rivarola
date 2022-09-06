import { configureStore } from "@reduxjs/toolkit";
import citiesApi from "./citiesApi";
import citiesSlice from "./citiesSlice";


export const  store = configureStore({
    reducer: {
        citiesSlice,
        [citiesApi.reducerPath] : citiesApi.reducer
    }
})

