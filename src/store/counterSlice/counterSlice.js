import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // action
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
    },
});

export const {increment, decrement} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;