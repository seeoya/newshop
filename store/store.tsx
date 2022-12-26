import { createSlice, configureStore } from "@reduxjs/toolkit";

/**
 * 카운터
 */
export const counterSlice = createSlice({
    name: "counterSlice",
    initialState: { value: 153 },
    reducers: {
        up: (state, action) => {
            state.value = state.value + action.payload;
            // state.value = state.value + action.step;
        },
        down: (state, action) => {
            state.value = state.value - action.payload;
        }
    }
});

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

export default store;
