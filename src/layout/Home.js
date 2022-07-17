import { useUserStatus } from "../redux/hooks";
export const Home = (props) => {
  const isLoggedIn = useUserStatus();
  return (
    <div>
      {isLoggedIn ? <p>Welcome to the Home</p> : <p>Please First login</p>}
      <hr />
      {props.children}
    </div>
  );
};
