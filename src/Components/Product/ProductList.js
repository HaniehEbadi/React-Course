import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "99 $", id:1},
      { title: "JavaScript", price: "79 $", id:2}
    ]
  };

  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({products: filteredProducts});
  };

  render() { 
    return (
      <div>
        {this.state.products.map((product, index) => {
        return (
          <Product 
            name={product.title} 
            price={product.price} 
            onDelete={() => this.removeHandler(product.id)}
          />
        );
      })}
      </div>
    );
  }
}
 
export default ProductList;