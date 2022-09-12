import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


const usersApi = createApi({
    reducerPath : 'usersApi',

    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
    }),

    endpoints: (build)=>({
        createuser: build.mutation({
            query(data){
               return{
                url: '/auth',
                method: 'POST',
                data,
               }
            }
        })
    })
})

export default usersApi
export const {useCreateuserMutation} = usersApi