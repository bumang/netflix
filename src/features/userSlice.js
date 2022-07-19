import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		subscription: null,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
			state.subscription = null;
		},

		setSubscription: (state, action) => {
			state.subscription = action.payload;
		},
	},
});

export const { login, logout, setSubscription } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const checkSubscription = (state) => state.user.subscription;

export default userSlice.reducer;
