import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "99 $", id:1, quantity:1},
      { title: "JavaScript", price: "79 $", id:2, quantity:2}
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

  renderProduct = () => {
    if (this.state.products.length === 0) 
      return <div>there is no product in cart</div>;

    return this.state.products.map((product) => {
      return (
        <Product 
          product={product}
          onIncrement={() => this.incrementHandler(product.id)}
          onDecrement={() => this.decrementHandler(product.id)}
          onDelete={() => this.removeHandler(product.id)}
          onChange={(e) => this.changeHandler(e,product.id)}
        />
      );
    });
  };

  render() { 
    return <div>
      {!this.state.products.length && <div>go to shoppings</div>}
      {this.renderProduct()}
      </div>;
  }
}
 
export default ProductList;