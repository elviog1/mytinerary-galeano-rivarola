import { configureStore } from "@reduxjs/toolkit";

import citiesApi from "./citiesApi";

export const  store = configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath] : citiesApi.reducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    //     inmutableCheck: false,
    //     serializableCheck: false
    // })
})

