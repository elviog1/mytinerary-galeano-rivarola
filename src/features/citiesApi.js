import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const citiesApi = createApi({

    reducerPath: "citiesApi",

    baseQuery: fetchBaseQuery({
<<<<<<< HEAD
        baseUrl: "https://my-tinerary-dreamjuan-back.herokuapp.com/" 
=======
        baseUrl: "https://my-tinerary-dreamjuan-back.herokuapp.com"
>>>>>>> 494c011b04a11f7dfb5814b705517d474303fa58
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