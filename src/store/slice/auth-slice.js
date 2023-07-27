import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { userDetails: {} },
  reducers: {},
});

export const authActions = authSlice.actions;

export default authSlice;
