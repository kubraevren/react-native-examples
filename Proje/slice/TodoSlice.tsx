import { View } from "react-native"
import { ITodo } from "../ITodo";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk<ITodo[], void>(
    'todos/fetchTodos',
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=58");
        const data = await response.json();
        return data;
    }
);


export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        error: null,
        loading: false,
        todos: [] as ITodo[]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.loading = false; // <-- Başarılı olduğunda da yükleme biter.
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false

            })
    }
})

export default todoSlice.reducer;