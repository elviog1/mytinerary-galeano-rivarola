import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


const usersApi = createApi({
    reducerPath : 'usersApi',

    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
    }),

    endpoints: (build)=>({
        createuser: build.query({
            query: (data) =>({
                url: `/auth/signup`,
                method: 'POST',
                body:data,              
            }),
        })
    })
})

export default usersApi
export const {useCreateuserMutation} = usersApi