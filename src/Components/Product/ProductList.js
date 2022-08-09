import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "99 $"},
      { title: "JavaScript", price: "79 $"}
    ]
  };
  clickHandler = () => {
    this.setState({
      products: [
        { title: "React.js", price: "89 $"},
        { title: "JavaScript", price: "69 $"}
      ]
    })
  };
  render() { 
    return (
      <div>
        {this.state.products.map((product) => {
        return (
          <Product 
            name={product.title} 
            price={product.price} 
            click={this.clickHandler}
          />
        );
      })}
      </div>
    );
  }
}
 
export default ProductList;