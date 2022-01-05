import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchevents = createAsyncThunk("news/events", async () => {
	const response = await fetch("./events.json").then((res) => res.json());
	return response;
});
export const fetchTopnews = createAsyncThunk("news/newsdata", async () => {
	const response = await fetch("./NewsData.json")
		.then((res) => res.json())
		.then((data) => data.slice(0, 6));
	return response;
});
export const fetchAllnews = createAsyncThunk("news/AllNewsdata", async () => {
	const response = await fetch("./NewsData.json").then((res) => res.json());
	return response;
});

const initialState = {
	events: [],
	topNews: [],
	allNews: [],
	allNewsItem: [],
	currentUser: {},
};

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		userState: (state, { payload }) => {
			state.currentUser = payload;
		},
		setNews: (state, { payload }) => {
			state.allNews = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchevents.fulfilled, (state, action) => {
			state.events = action.payload;
		});
		builder.addCase(fetchTopnews.fulfilled, (state, action) => {
			state.topNews = action.payload;
		});
		builder.addCase(fetchAllnews.fulfilled, (state, action) => {
			state.allNews = action.payload;
			state.allNewsItem = action.payload;
		});
	},
});

// Action creators are generated for each case reducer function
export const { setNews, userState } = newsSlice.actions;

export default newsSlice.reducer;
