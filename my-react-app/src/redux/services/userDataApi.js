import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userDataApi = createApi({
    reducerPath: 'userDataApi',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_DATABASE_URL,

        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getUser: builder.mutation({
            query: () => ({
                url: '/user/profile',
                method: 'POST',
                headers: {"Content-type": "application/json"},
            }),
        }),
        editUserProfile: builder.mutation({
            query: (body) => ({
                url: '/user/profile',
                method: 'PUT',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body),
            })
        })
    }),
});

export const { useGetUserMutation, useEditUserProfileMutation } = userDataApi;

