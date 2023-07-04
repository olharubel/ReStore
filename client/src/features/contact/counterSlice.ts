import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    data: number;
    title: string;
}

const initialState: CounterState = {
    data: 42,
    title: 'YARC (Yet another Redux Counter with redux toolkit)'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.data += 1
        },
        decrement: (state) => {
            state.data -= 1
        },
    }
}) 

export const {increment, decrement} = counterSlice.actions;