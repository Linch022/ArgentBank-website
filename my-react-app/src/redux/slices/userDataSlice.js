import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
};

const userDataSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
			localStorage.removeItem("token");
		},
		editUserName: (state, action) => {
			if (state.user) {
				state.user.userName = action.payload;
			}
		},
	},
});

export const { setUser, logout, editUserName } = userDataSlice.actions;
export default userDataSlice.reducer;
