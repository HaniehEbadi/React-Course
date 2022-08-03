import { Component, useState } from "react";
import Product from "./Components/Product/Product";

// class App extends Component {
//   state = {
//     products: [
//       { title: "React.js", price: "99 $"},
//       { title: "JavaScript", price: "79 $"}
//     ]
//   }

//   clickHandler = () => {
//     this.setState({
//       products: [
//         { title: "React.js", price: "89 $"},
//         { title: "JavaScript", price: "69 $"}
//       ]
//     })
//   }

//   render() {
//     return(
//       <div className="container" id="title"> 
//         <h1>shopping App</h1>
//         {this.state.products.map((product) => {
//           return <Product name={product.title} price={product.price} />;
//         })}
//         <button onClick={this.clickHandler}>change price</button>
//       </div>
//     )
//   }
// }

const App = () => {
  const [products,setProducts] = useState([
    { title: "React.js", price: "99 $"},
    { title: "JavaScript", price: "79 $"}
  ]);

  const clickHandler = () => {
    setProducts([
      { title: "React.js", price: "89 $"},
      { title: "JavaScript", price: "69 $"}
    ]);
  };

  return(
    <div className="container" id="title"> 
      <h1>shopping App</h1>
      {products.map((product) => {
        return <Product name={product.title} price={product.price} />;
      })}
      <button onClick={clickHandler}>change price</button>
    </div>
  );
};

export default App;