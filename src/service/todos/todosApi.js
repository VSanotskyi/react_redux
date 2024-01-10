import axios from "axios";

axios.defaults.baseURL =
    "https://659aff00d565feee2daac044.mockapi.io/api/homework/";

export const axiosGetAllTodos = async () => await axios("todo");

export const axiosAddTodo = async (todo) => await axios.post(`todo`, todo);

export const axiosDeleteTodo = async (todoId) => await axios.delete(
    `todo/${todoId}`);
