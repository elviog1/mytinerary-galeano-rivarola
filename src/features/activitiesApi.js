import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const activitiesApi = createApi({

    reducerPath: "activitiesApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://my-tinerary-dreamjuan-back.herokuapp.com"
    }), 

    endpoints: (builder) =>({
        byitinerary:builder.query({
            query: (id)=> `/activities/query?itinerary=${id}`
        }),
    })
})


export default activitiesApi
export const {useByitineraryQuery} = activitiesApi