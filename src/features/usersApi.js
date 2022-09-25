import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


const usersApi = createApi({
    reducerPath : 'usersApi',

    baseQuery:fetchBaseQuery({
        baseUrl: 'https://my-tinerary-dreamjuan-back.herokuapp.com',
    }),

    endpoints: (build)=>({
        createuser: build.query({
            query: (data) =>({
                url: `/auth/signup`,
                method: 'POST',
                body:data,              
            }),
        }),
        signout: build.query({
            query: (data) =>({
                url: `/auth/signout`,
                method: 'POST',
                body:data,              
            }),
        })
    })
})

export default usersApi
export const {useCreateuserMutation,useSignoutMutation} = usersApi