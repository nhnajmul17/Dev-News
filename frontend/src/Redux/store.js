import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './NewsSlice/NewsSlice'


export const store = configureStore({
    reducer: {
        news: newsReducer

    },
})