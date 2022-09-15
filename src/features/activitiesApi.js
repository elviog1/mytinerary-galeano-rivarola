import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const activitiesAPI = createApi({
    reducerPath: "activitiesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
        }),
        endpoints: (builder)=>({
            createActivity: builder.mutation({
                query: (activity) =>({
                url: `/activities`,
                method:'POST',
                body: activity
                    })
                }),

                getActivity: builder.query({
                    query: (id) => `/activities/${id}`
                }),

                getAllActivities: builder.query({
                    query: () => `/activities/`
                    }),

                getItineraryActivities: builder.query({
                    query: (id) => `/activities/query?itinerary=${id}`
                    }),

                modifyActivity: builder.mutation({
                    query: (id,data) =>({
                    url: `/activities/${id}`,
                    method:'PATCH',
                    body: data
                        })
                    }),

                deleteActivity: builder.mutation({
                    query: (id) =>({
                        url: `/activities/${id}`,
                        method:'DELETE',
                        })
                    })
        })
    })

export const {
        useCreateActivityMutation,
        useDeleteActivityMutation,useGetActivityQuery,
        useGetAllActivitiesQuery,
        useGetItineraryActivitiesQuery
    } = activitiesAPI
