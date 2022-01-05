import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { REACT_API_URL } from "../../Utils";

export const fetchevents = createAsyncThunk("news/events", async () => {
    const response = await fetch(`${REACT_API_URL}/events`).then((res) => res.json());
    return response.data;
});
export const fetchTopnews = createAsyncThunk("news/newsdata", async () => {
    const response = await fetch(`${REACT_API_URL}/news`)
        .then((res) => res.json())
        .then((data) => data.data.slice(0, 6));
    return response;
});
export const fetchAllnews = createAsyncThunk("news/AllNewsdata", async () => {
    const response = await fetch(`${REACT_API_URL}/news`).then((res) => res.json());
    return response.data;
});


export const deleteNews = createAsyncThunk(
    'news/AllNewsdata',
    async (id) => {
        const response = await axios
            .delete(`${REACT_API_URL}/news/${id}`, {
                headers: { "x-access-token": localStorage.getItem("token") },
            })
            .then((res) => {
                if (res.data.status === 'success') {
                    alert('News Deleted')
                    window.location.reload()
                }
            })
            .catch((err) => {
            });
        return response
    }
)

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
