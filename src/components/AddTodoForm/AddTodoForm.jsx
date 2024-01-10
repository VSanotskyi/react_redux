import {useState} from "react";
import {useDispatch} from "react-redux";

import {fetchAddTodo} from "../../store/todos/operations";

const initState = {
    todo: "",
};

const AddTodoForm = () => {
    const [todo, setTodo] = useState(initState);
    const dispatch = useDispatch();

    const handleChange = ({target: {value, name}}) => {
        setTodo(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchAddTodo(todo));
        setTodo(initState);
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    <input type="text"
                           name="todo"
                           value={todo.todo}
                           onChange={handleChange}
                           required
                    />
                    <button type="submit">Add todo</button>
                </label>
            </form>
        </>
    );
};

export {AddTodoForm};