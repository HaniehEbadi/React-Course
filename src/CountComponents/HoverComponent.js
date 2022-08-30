import WithCounter from "./withCounter";

const HoverComponent = ({count,incrementCount}) => {

  return (
    <div>
      <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
    </div>
  );
}
 
export default WithCounter(HoverComponent,10);