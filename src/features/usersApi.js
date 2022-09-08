import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


const usersApi = createApi({
    reducerPath : 'usersApi',

    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
    }),

    endpoints: (builder)=>({
        create: builder.query({
            query: () => `/auth`
        })
    })
})

export const {useCreateQuery} = usersApi