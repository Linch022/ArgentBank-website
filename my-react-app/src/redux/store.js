import { configureStore } from "@reduxjs/toolkit";
import { userDataApi } from "../redux/services/userDataApi";
import userDataReducer from "../redux/slices/userDataSlice";

export const store = configureStore({
    reducer:{
        auth: userDataReducer,
        [userDataApi.reducerPath]: userDataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userDataApi.middleware),
    });

