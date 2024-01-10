import {useDispatch, useSelector} from "react-redux";
import {selectCounter} from "./store/counterSlice/selector";
import {decrement, increment} from "./store/counterSlice/counterSlice";

const App = () => {
    const {counter} = useSelector(selectCounter);
    const dispatch = useDispatch();

    return (
        <div style={{display: "flex", gap: "10px"}}>
            <button onClick={() => dispatch(increment())}>+</button>
            <span>{counter}</span>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export {App};