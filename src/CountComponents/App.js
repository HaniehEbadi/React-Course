//import CounterClass from "./ClassCounter"
//import ClickComponent from "./ClickComponent"
//import HookCounter from "./HookCounter"
//import HoverComponent from "./HoverComponent"
//import UseRefExample from "./useRef"
//import CountReducer from "../Components/Reducer/CountReducer"

import CounterOne from "../Components/Context/CounterOne"
import CounterProvider from "../Components/Context/CounterProvider"

const App = () => {
  return ( 
    <div>
      {/* <ClickComponent name = "hana"/> */}
      {/* <HoverComponent/> */}
      {/* <UseRefExample /> */}
      <CounterProvider>
        <p>Welcome</p>
        {/* <CountReducer /> */}
        <CounterOne />
      </CounterProvider>
    </div>
  )
}

export default App 