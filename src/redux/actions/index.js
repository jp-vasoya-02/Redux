export const incrementAction=(no)=>{
    return{
      type: "increment",
      payload:no
    }
  }
  export const decrementAction=(no)=>{
    return{
      type: "decrement",
      payload:no
    }
  }
  export const loginAction=()=>{
    return{
      type: "signin",
    }
  }