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
    }),
});

export const { useGetUserMutation } = userDataApi;
console.log(useGetUserMutation);

