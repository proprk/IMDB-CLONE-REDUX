import {createSlice} from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name: 'pagination',
    initialState : {value: 1},
    reducers:{
        handleNext: (state) => {state.value += 1},
        handlePrev: (state) => {state.value > 1 ? state.value -= 1 : 1}
    }
})

export const {handleNext, handlePrev} = paginationSlice.actions;
export default paginationSlice.reducer;