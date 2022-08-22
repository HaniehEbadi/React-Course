import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  renderProduct = () => {
    if (this.props.products.length === 0) 
      return <div>there is no product in cart</div>;

    return this.props.products.map((product) => {
      return (
        <Product 
          product={product}
          onIncrement={() => this.props.onIncrement(product.id)}
          onDecrement={() => this.props.onDecrement(product.id)}
          onDelete={() => this.props.onRemove(product.id)}
          onChange={(e) => this.props.onChange(e,product.id)}
        />
      );
    });
  };

  render() { 
    return (
      <div>
        {!this.props.products.length && <div>go to shoppings</div>}
        {this.renderProduct()}
      </div>
    )
  }
}
 
export default ProductList;