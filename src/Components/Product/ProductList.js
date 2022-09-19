import { useProducts, useProductsActions } from '../Providers/ProductsProvider';
import Product from './Product';


const ProductList = () => {
  const products = useProducts()
  const dispatch = useProductsActions();

  const renderProduct = () => {
    if (products.length === 0) return <div>there is no product in cart</div>;

    return products.map((product) => {
      return (
        <Product 
          product={product}
          onIncrement={() => dispatch({type: "increment", id: product.id})}
          onDecrement={() => dispatch({type: "decrement", id: product.id})}
          onDelete={() => dispatch({type: "remove", id: product.id})}
          onChange={(e) => dispatch({type: "edit", id: product.id, event: e})}
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