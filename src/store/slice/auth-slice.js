import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetails: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  },
  reducers: {
    setUserDetails(state, action) {
      state.userDetails = action.payload.userDetails;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(state.userDetails));
      localStorage.setItem("token", state.token);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
