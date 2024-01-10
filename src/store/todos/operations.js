import {createAsyncThunk} from "@reduxjs/toolkit";

import {
    axiosAddTodo,
    axiosDeleteTodo,
    axiosGetAllTodos,
} from "../../service/todos/todosApi";

export const fetchTodos = createAsyncThunk("todos/fetchTodos",
    async (_, thunkAPI) => {
        try {
            const {data} = await axiosGetAllTodos();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const fetchAddTodo = createAsyncThunk("todos/fetchAddTodo",
    async (newTodo, thunkAPI) => {
        try {
            const {data} = await axiosAddTodo(newTodo);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const fetchDeleteTodo = createAsyncThunk("todos/fetchDeleteTodo",
    async (todoId, thunkAPI) => {
        try {
            const {data} = await axiosDeleteTodo(todoId);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });
