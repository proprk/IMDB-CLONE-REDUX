import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import paginationReducer from './paginationSlice'


const store = configureStore({
    reducer:{
        counter: counterReducer,
        pagination: paginationReducer
    }
})

export default store;