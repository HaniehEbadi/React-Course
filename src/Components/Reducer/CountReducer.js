import { useReducer } from "react";

const initialState = {
  firstCounter : 0,
}
const reducer = (state,action) => {
  switch (action.type) {
    case "addOne":
      return {firstCounter : state.firstCounter + action.value};
    case "reset":
      return initialState;
    case "decrement":
      return {firstCounter : state.firstCounter - action.value};
    default:
      return state;
  }
}

const CounterOne = () => {
  const [count,dispatch] = useReducer(reducer,initialState)
  return ( 
    <div>
      <h2> count is : {count.firstCounter}</h2>
      <button onClick={() => dispatch({type: "addOne", value: 1})}>addOne</button>
      <button onClick={() => (dispatch({type: "reset"}))}>reset</button>
      <button onClick={() => (dispatch({type: "decrement", value: 1}))}>decrement</button>
    </div>
   );
}
 
export default CounterOne;