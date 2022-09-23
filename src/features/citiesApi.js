import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const citiesApi = createApi({

    reducerPath: "citiesApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }), 

    endpoints: (builder) =>({
        all:builder.query({
            query: (search)=> `/cities/?name=${search}`
        }),
        details:builder.query({
            query: (id)=> `/cities/${id}`
        }),
        getID:builder.query({
            query: (name)=> `/cities/${name}`
        }),
        editCity: builder.mutation({
            query:({name,data}) =>({
                url: `/cities/${name}`,
                method: 'PUT',
                body: data
            })
        }),

    }),


})


export default citiesApi
export const {useGetIDQuery,useEditCityMutation,useDetailsQuery, useAllQuery} = citiesApi