import { addCount } from "../Redux/Counter/action";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter.counter);
  return (
    <div>
      <h3>Counter:{counter}</h3>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          dispatch(addCount(-1));
        }}
      >
        Sub 1
      </button>
    </div>
  );
};
