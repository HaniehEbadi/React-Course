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
    const products = [...this.state.products]
    const selectedProduct = this.state.products.find((p) => p.id === id)
    selectedProduct.quantity += 1
    this.setState({products : products})
  }
  
  decrementHandler = (id) => {
    const products = [...this.state.products]
    const selectedProduct = products.find((p) => p.id === id)
    if (selectedProduct.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      this.setState({products: filteredProducts});
    } else {
      selectedProduct.quantity -= 1
      this.setState({products : products})
    }
  }

  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({products: filteredProducts});
  };

  changeHandler = (event,id) => {
    const products = [...this.state.products]
    const selectedProduct = this.state.products.find((p) => p.id === id)
    selectedProduct.title = event.target.value
    this.setState({products})
  };

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