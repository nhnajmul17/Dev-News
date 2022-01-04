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

const initialState = {
    events: [],
    topNews: []
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchevents.fulfilled, (state, action) => {
            state.events = (action.payload)
        })
        builder.addCase(fetchTopnews.fulfilled, (state, action) => {
            state.topNews = (action.payload)
        })

    },
})

// Action creators are generated for each case reducer function
export const { increment, } = newsSlice.actions

export default newsSlice.reducer