import { configureStore } from "@reduxjs/toolkit";
// import { useEffect } from "react";
import newsReducer from "./NewsSlice/NewsSlice";

export const store = configureStore({
	reducer: {
		news: newsReducer,
	},
});
