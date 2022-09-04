import { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
  const [count,setCount] = useState(0)
  const prevCount = useRef()

  useEffect(() => {
    prevCount.current = count
  },[count])

  return ( 
    <div>
      <button onClick={() => setCount(Math.ceil(Math.random()*100))}> Generate Random </button>
      <p>count is : {count}</p>
      <p>previos count is : {prevCount.current}</p>
    </div>
   );
}
 
export default UseRefExample;