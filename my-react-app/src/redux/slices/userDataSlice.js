import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
}

const userDataSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userDataSlice.actions;
export default userDataSlice.reducer;