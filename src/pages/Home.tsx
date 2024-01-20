import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { decrement, increment } from "../redux/features/counter/counterSlice";

const Home = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center align-middle my-8 mx-auto">
      <button
        className="btn btn-outline btn-primary "
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <p className="mx-4 mt-2">{count}</p>
      <button
        className="btn btn-outline btn-secondary"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
    </div>
  );
};

export default Home;
