import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchevents = createAsyncThunk(
    'news/events',
    async () => {
        const response = await fetch('./events.json')
            .then(res => res.json())
        return response
    }
)
export const fetchTopnews = createAsyncThunk(
    'news/newsdata',
    async () => {
        const response = await fetch('./NewsData.json')
            .then(res => res.json())
            .then(data => (data.slice(0, 6)))
        return response
    }
)
export const fetchAllnews = createAsyncThunk(
    'news/AllNewsdata',
    async () => {
        const response = await fetch('./NewsData.json')
            .then(res => res.json())
        return response
    }
)


export const deleteNews = createAsyncThunk(
    'news/AllNewsdata',
    async (id) => {
        const response = await fetch(`https://localhost5000/deleteNews/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    alert(' News Deleted')
                    window.location.reload()
                } else {
                }
            });
        return response
    }
)

const initialState = {
    events: [],
    topNews: [],
    allNews: [],
    allNewsItem: [],

}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews: (state, { payload }) => {
            state.allNews = payload

        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchevents.fulfilled, (state, action) => {
            state.events = (action.payload)
        })
        builder.addCase(fetchTopnews.fulfilled, (state, action) => {
            state.topNews = (action.payload)
        })
        builder.addCase(fetchAllnews.fulfilled, (state, action) => {
            state.allNewsItem = (action.payload)
            state.allNews = (action.payload)
        })


    },
})

// Action creators are generated for each case reducer function
export const { setNews } = newsSlice.actions

export default newsSlice.reducer