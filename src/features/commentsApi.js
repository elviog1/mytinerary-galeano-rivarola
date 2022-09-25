import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const commentsApi = createApi({

    reducerPath: "commentsApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }), 

    endpoints: (builder) =>({
        create:builder.mutation({
            query: (data)=> ({
            url:`/comments`,
            method: 'POST',
            headers: {"Authorization": `Bearer ${localStorage.getItem("token").replace(/['"]+/g, '')}`},
            body: data,
        })
        }),
        delete:builder.query({
            query: (id) => ({

                headers: {"Authorization": `Bearer ${localStorage.getItem("token").replace(/['"]+/g, '')}`}
            }),            
        }),
        edit: builder.mutation({
            query:(id,data) =>({
                url: `/comments/${id}`,
                method: 'PATCH',
                headers: {"Authorization": `Bearer ${localStorage.getItem("token").replace(/['"]+/g, '')}`},
                body: data
            })
        })
    })
})


export default commentsApi
export const {useCreateMutation, useDeleteQuery, useEditMutation} = commentsApi