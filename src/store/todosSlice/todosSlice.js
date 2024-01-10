import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import {baseUrl} from "../../services/todosApi/todosApi";

export const todosApi = createApi({
    reducerPath: "todosApi",
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: builder => ({
        getAllTodos: builder.query({
            query: () => "todo",
        }),
        addTodo: builder.mutation({
            query: (newTodo) => ({
                url: "todo",
                method: "POST",
                body: newTodo,
            }),
        }),
    }),
});

export const {useGetAllTodosQuery} = todosApi;