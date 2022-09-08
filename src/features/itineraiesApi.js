import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const itinerariesApi = createApi({

    reducerPath: "itinerariesApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }), 

    endpoints: (builder) =>({
        byuser:builder.query({
            query: (id)=> `/itineraries/queryu?user=${id}`
        }),
        bycity:builder.query({
            query: (id) => `/itineraries/query?city=${id}`
        })
    })
})


export default itinerariesApi
export const {useByuserQuery, useBycityQuery} = itinerariesApi