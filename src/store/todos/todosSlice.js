import {createSlice} from "@reduxjs/toolkit";

import {fetchAddTodo, fetchDeleteTodo, fetchTodos} from "./operations";

const pending = (state) => {
    state.todos.isLoading = true;
};

const rejected = (state, {payload}) => {
    state.todos.isLoading = true;
    state.todos.error = payload;
};

const initialState = {
    todos: {
        items: [],
        isLoading: false,
        error: null,
    },
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    extraReducers: builder => {
        builder
            // pending
            .addCase(fetchTodos.pending, pending)
            .addCase(fetchAddTodo.pending, pending)
            .addCase(fetchDeleteTodo.pending, pending)
            // rejected
            .addCase(fetchTodos.rejected, rejected)
            .addCase(fetchAddTodo.rejected, rejected)
            .addCase(fetchDeleteTodo.rejected, rejected)
            // fulfilled
            .addCase(fetchTodos.fulfilled, (state, {payload}) => {
                state.todos.isLoading = false;
                state.todos.items = payload;
            })
            .addCase(fetchAddTodo.fulfilled, (state, {payload}) => {
                state.todos.isLoading = false;
                state.todos.items.push(payload);
            })
            .addCase(fetchDeleteTodo.fulfilled, (state, {payload}) => {
                state.todos.isLoading = false;
                // state.todos.items = state.todos.items.filter(
                //     ({id}) => id !== payload.id);

                const index = state.todos.items.findIndex(
                    el => el.id === payload.id);

                state.todos.items.splice(index, 1);
            });
    },
});

export const todosReducer = todosSlice.reducer;