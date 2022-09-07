import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const citiesApi = createApi({

    reducerPath: "citiesApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000" 
    }), 

    endpoints: (builder) =>({
        all:builder.query({
            query: (search)=> `/cities/?name=${search}`
        })
    })
})


export default citiesApi
export const {useAllQuery} = citiesApi