import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function counter() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => {
        return state.counter.value;
    });
    // const [count, setCount] = useState(0);

    return (
        <div>
            <div>카운터</div>
            <div> 숫자 : {counter} </div>
            <button
                onClick={() => {
                    // dispatch({ type: "counter/up", step: 2 });
                    dispatch(counter.actions.up(2));
                }}
                className="p-2 bg-orange-400"
            >
                +1
            </button>
            <button
                onClick={() => {
                    counter.counter.down(1);
                }}
                className="p-2 bg-lime-300"
            >
                -1
            </button>
        </div>
    );
}
