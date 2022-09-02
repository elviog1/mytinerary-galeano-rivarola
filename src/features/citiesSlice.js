import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const citiesSlice = createSlice({
    name: 'cities',

    initialState: {
        cities: []
    },

    reducers: {
        fetchFromServer: (state) => {
            state.cities = [
                {
                    name: "athens",
                    country:'greece',
                    image: 'image.jpg',
                    population:'789513',
                    fundation:'508'
                }
            ]
        }
    },
})

export const{fetchFromServer} = citiesSlice.actions

export default citiesSlice.reducer
