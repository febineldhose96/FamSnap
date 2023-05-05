import { configureStore } from "@reduxjs/toolkit";
import { DetailSlice } from "../Screens/Details/reducer";
import { HomeSlice } from "../Screens/Home/reducer";
import { LauncherSlice } from "../Screens/Launcher/reducer";

export const store = configureStore({
  reducer: {
    HomeReducer: HomeSlice.reducer,
    DetailReducer: DetailSlice.reducer,
    LauncherReducer: LauncherSlice.reducer,
  },
});
