import { configureStore } from "@reduxjs/toolkit";
// import { useEffect } from "react";
import newsReducer from "./NewsSlice/NewsSlice";
import jwt_decode from "jwt-decode";

const currentUser = () => {
	const token = localStorage.getItem("token");
	if (token) {
		const user = jwt_decode(token);
		if (user) {
			console.log("user ==>", user);
			return user;
		}
	} else {
		console.log("");
	}
};
currentUser();

export const store = configureStore({
	reducer: {
		news: newsReducer,
	},
});
