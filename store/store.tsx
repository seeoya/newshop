// import { configureStore, createSlice } from "@reduxjs/toolkit";

// let itemsState = createSlice({
//     name: "itemsState",
//     initialState: [
//         { no: 0, title: "제목", date: "00.01.01", content: "내용", color: "red", background: "#000" },
//         { no: 1, title: "제목1", date: "00.01.02", content: "내용1", color: "yellow", background: "blue" }
//     ],

//     reducers: {
//         addItem(state, action) {
//             let { no, title, date, content } = action.payload;
//         }
//     }
// });

// export let { addItem } = itemsState.actions;
// export default configureStore({
//     reducer: {
//         itemsState: itemsState.reducer
//     }
// });


// quick start cp
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
