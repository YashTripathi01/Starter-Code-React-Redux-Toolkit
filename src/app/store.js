import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterApp/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    } // all the reducers will be added here

}) 