import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  renderProduct = () => {
    const {onChange,onIncrement,onDecrement,onRemove,products} = this.props;
    if (products.length === 0) 
      return <div>there is no product in cart</div>;

    return products.map((product) => {
      return (
        <Product 
          product={product}
          onIncrement={() => onIncrement(product.id)}
          onDecrement={() => onDecrement(product.id)}
          onDelete={() => onRemove(product.id)}
          onChange={(e) => onChange(e,product.id)}
        />
      );
    });
  };

  render() { 
    const { products } = this.props;
    return (
      <div>
        {!products.length && <div>go to shoppings</div>}
        {this.renderProduct()}
      </div>
    )
  }
}
 
export default ProductList;