import { configureStore } from "@reduxjs/toolkit";
import citiesApi from "./citiesApi";
import itinerariesApi from "./itineraiesApi"

export const  store = configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath] : citiesApi.reducer,

        itineraries: itinerariesApi,
        [itinerariesApi.reducerPath] : itinerariesApi.reducer},


     middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
         inmutableCheck: false,
         serializableCheck: false,
         citiesApi: true
     })

})

