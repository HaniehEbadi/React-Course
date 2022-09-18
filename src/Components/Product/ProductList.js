import { useProducts, useProductsActions } from '../Providers/ProductsProvider';
import Product from './Product';


const ProductList = () => {
  const products = useProducts()
  const {removeHandler,incrementHandler,changeHandler,decrementHandler} = useProductsActions();

  const renderProduct = () => {
    if (products.length === 0) 
      return <div>there is no product in cart</div>;

    return products.map((product) => {
      return (
        <Product 
          product={product}
          onIncrement={() => incrementHandler(product.id)}
          onDecrement={() => decrementHandler(product.id)}
          onDelete={() => removeHandler(product.id)}
          onChange={(e) => changeHandler(e,product.id)}
        />
      );
    });
  };
  return ( 
    <div>
      {!products.length && <div>go to shoppings</div>}
      {renderProduct()}
    </div>
   );
}
 
export default ProductList;