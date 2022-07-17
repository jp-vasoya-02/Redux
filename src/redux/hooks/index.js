import { useSelector } from "react-redux";

export const useUserStatus = () => {
  const isLoggedIn = useSelector((state) => state.login);
  return isLoggedIn;
};

export const useCurrentCount = () => {
  const count = useSelector((state) => state.counter);
  return count;
};
