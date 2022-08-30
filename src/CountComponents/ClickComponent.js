import WithCounter from "./withCounter";

const ClickComponent = ({count,incrementCount,name}) => {
  console.log(name)
  return ( 
    <div>
      <h2 onClick={incrementCount}>clicked {count} times</h2>
    </div>
  );
}
 
export default WithCounter(ClickComponent,5);