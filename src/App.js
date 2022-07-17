import { useDispatch} from "react-redux";
import { Home } from "./layout/Home";
import { incrementAction, decrementAction, loginAction } from "./redux/actions";
import { useUserStatus, useCurrentCount } from "./redux/hooks";

function App() {
  const dispatch = useDispatch();
  const Counter = () => {
    const increment = () => {
      dispatch(incrementAction(3));
    };
    const decrement = () => {
      dispatch(decrementAction(2));
    };
    const count = useCurrentCount();
    return (
      <>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <hr />
        count={count}
      </>
    );
  };
  const LoginContainer = () => {
    const login = () => {
      dispatch(loginAction());
    };
    return (
      <div>
        <button onClick={login}>Login</button>
      </div>
    );
  };
  const isLoggedIn = useUserStatus();
  return <Home>{isLoggedIn ? <Counter /> : <LoginContainer />}</Home>;
}

export default App;
