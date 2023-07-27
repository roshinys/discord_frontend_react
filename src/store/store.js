import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth-slice";
import alertSlice from "./slice/alert-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export default store;
