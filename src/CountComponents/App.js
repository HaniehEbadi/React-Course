//import CounterClass from "./ClassCounter"
//import ClickComponent from "./ClickComponent"
//import HookCounter from "./HookCounter"
//import HoverComponent from "./HoverComponent"
//import UseRefExample from "./useRef"

import CounterOne from "../Components/Context/CounterOne"
import CounterProvider from "../Components/Context/CounterProvider"

const App = () => {
  return ( 
    <div>
      {/* <ClickComponent name = "hana"/> */}
      {/* <HoverComponent/> */}
      {/* <UseRefExample /> */}
      <CounterProvider>
        <CounterOne />
      </CounterProvider>
    </div>
  )
}

export default App 