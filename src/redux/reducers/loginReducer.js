export const loginReducer = (state = false, action) => {
  switch (action.type) {
    case "signin":
      return (state = !state);
    default:
      return state;
  }
};
