import {useGetAllTodosQuery} from "../../store/todosSlice/todosSlice";

import {TodoItem} from "../TodoItem/TodoItem";

const TodosList = () => {
    const {data, error, isLoading} = useGetAllTodosQuery();

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {
                data?.length > 0 &&
                <ul>
                    {data.map(item => <TodoItem key={item.id}
                                                item={item}
                    />)}
                </ul>
            }
        </div>
    );
};

export {TodosList};