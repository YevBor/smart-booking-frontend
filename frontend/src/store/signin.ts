import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const signInSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.isAuthenticated = false;
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload; // user data
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload; // error message
    },
    signOut: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, signOut } =
  signInSlice.actions;

export default signInSlice.reducer;
