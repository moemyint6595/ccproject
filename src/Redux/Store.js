import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './TodoSlice';
import modelReducer from './ModelSlice';

export default configureStore({
    reducer : {
        todos : todoReducer,
        model : modelReducer
    }
})