import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount()
  const {addOne,addFive} = useCountActions()

  return ( 
    <div>
      <h2> count is : {count}</h2>
      <button onClick={addOne}>add one</button>
      <button onClick={addFive}>add five</button>
    </div>
   );
}
 
export default CounterOne;