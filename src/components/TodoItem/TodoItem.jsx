import {useDispatch} from "react-redux";
import {fetchDeleteTodo} from "../../store/todos/operations";

const TodoItem = ({item}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchDeleteTodo(item.id));
    };

    return (
        <div>
            <p>{item.todo}</p>
            <button type="button"
                    onClick={handleClick}
            >del
            </button>
        </div>
    );
};

export {TodoItem};