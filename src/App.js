import ProductList from "./Components/Product/ProductList";
import NavBar from "./Components/NavBar/NavBar";
import "./style.css"
import React, {Component} from "react";

class App extends Component {
  state = {
    products: [
      { title: "React.js", price: "99 $", id:1, quantity:1},
      { title: "JavaScript", price: "79 $", id:2, quantity:2},
      { title: "VSCode", price: "58 $", id:3, quantity:4}
    ]
  };

  incrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id)
    const product = {...this.state.products[index]}
    product.quantity += 1
    const products = [...this.state.products]
    products[index] = product
    this.setState({products})
  }
  
  decrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id)
    const product = {...this.state.products[index]}
    if (product.quantity === 1) {
      const filteredProducts = this.state.products.filter((p) => p.id !== id);
      this.setState({products: filteredProducts});
    } else {
      const products = [...this.state.products]
      product.quantity -= 1
      products[index] = product
      this.setState({products})
    }
  }

  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({products: filteredProducts});
  };

  changeHandler = (event,id) => {
    const products = [...this.state.products]
    const index = this.state.products.findIndex((item) => item.id === id) 
    const product = {...this.state.products[index]}
    product.title = event.target.value
    products[index] = product
    this.setState({products})
  };

  componentDidUpdate(prevProps,prevState) {
    console.log("App.js",prevState)
  }

  render() {
    return(
      <div className="container" id="title">
        <NavBar totalItems = {this.state.products.filter((p) => p.quantity > 0).length}/>
        <ProductList 
          products={this.state.products}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
          onRemove={this.removeHandler}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;