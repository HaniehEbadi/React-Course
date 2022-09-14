import { useReducer } from "react";

const initialState = 0

const reducer = (state,action) => {
  console.log(state,action)
  switch (action.type) {
    case "addOne":
      return state + action.value
    case "reset":
      return initialState;
    case "decrement":
      return state - action.value;
    default:
      return state;
  }
}

const CounterOne = () => {
  const [count,dispatch] = useReducer(reducer,initialState)
  return ( 
    <div>
      <h2> count is : {count}</h2>
      <button onClick={() => dispatch({type: "addOne", value: 1})}>addOne</button>
      <button onClick={() => (dispatch({type: "reset"}))}>reset</button>
      <button onClick={() => (dispatch({type: "decrement", value: 1}))}>decrement</button>
    </div>
   );
}
 
export default CounterOne;