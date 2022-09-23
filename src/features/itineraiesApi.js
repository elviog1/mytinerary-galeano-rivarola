import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const itinerariesApi = createApi({

    reducerPath: "itinerariesApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }), 

    endpoints: (builder) =>({
        byuser:builder.query({
            query: (id)=> (`/itineraries/queryu?user=${id}`),
            transformResponse: res => res.response
        }),
        bycity:builder.query({
            query: (id) => (`/itineraries/query?city=${id}`),
            transformResponse: res => res.response
        }),
        likeDislike: builder.mutation({
            query:(id) =>({
                url: `/itineraries/like/${id}`,
                method: 'PATCH',
                headers: {"Authorization": `Bearer ${localStorage.getItem("token").replace(/['"]+/g, '')}`}
            })
        }),
        create:builder.mutation({
            query: (data)=> ({
            url:`/itineraries`,
            method: 'POST',
            headers: {"Authorization": `Bearer ${localStorage.getItem("token").replace(/['"]+/g, '')}`},
            body: data,
        })
        })
    })
})


export default itinerariesApi
export const {useCreateMutation,useByuserQuery, useBycityQuery, useLikeDislikeMutation} = itinerariesApi