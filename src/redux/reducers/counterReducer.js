export const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "increment":
        return (state = state + action.payload);
      case "decrement":
        return (state = state - action.payload);
      default:
        return state;
    }
  };
  