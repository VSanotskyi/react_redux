import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchTodos} from "../../store/todos/operations";
import {selectTodos} from "../../store/todos/selectors";
import {TodoItem} from "../TodoItem/TodoItem";
import {AddTodoForm} from "../AddTodoForm/AddTodoForm";

const TodosList = () => {
    const {items, isLoading, error} = useSelector(selectTodos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div>
            <AddTodoForm/>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {
                items.length > 0 &&
                items.map(item => <TodoItem key={item.id}
                                            item={item}
                />)
            }
        </div>
    );
};

export {TodosList};