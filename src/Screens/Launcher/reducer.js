import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
};

const LauncherSlice = createSlice({
  name: "Launcher",
  initialState,
  reducers: {
    onlogin: (state, action) => {
      return { ...state, isLoggedIn: action.payload };
    },
  },
});
const { onlogin } = LauncherSlice.actions;
export { LauncherSlice, onlogin };
