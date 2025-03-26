import { configureStore } from "@reduxjs/toolkit";
import { userDataApi } from "./services/userDataApi";
import userDataReducer from "./slices/userDataSlice";

export const store = configureStore({
	reducer: {
		auth: userDataReducer,
		[userDataApi.reducerPath]: userDataApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userDataApi.middleware),
});
