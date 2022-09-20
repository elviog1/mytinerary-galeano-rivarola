import { configureStore } from "@reduxjs/toolkit";
import activitiesApi from "./activitiesApi";
import citiesApi from "./citiesApi";
import itinerariesApi from "./itineraiesApi"
import usersApi from "./usersApi"


export const  store = configureStore({
    reducer: {
        cities: citiesApi,
        [citiesApi.reducerPath] : citiesApi.reducer,

        itineraries: itinerariesApi,
        [itinerariesApi.reducerPath] : itinerariesApi.reducer,
    
        users: usersApi,
        [usersApi.reducerPath] : usersApi.reducer,

        activities: activitiesApi,
        [activitiesApi.reducerPath] : activitiesApi.reducer,
    },

        


     middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
         inmutableCheck: false,
         serializableCheck: false,
         citiesApi: true
     })

})

