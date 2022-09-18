import ProductList from "./Components/Product/ProductList";
import NavBar from "./Components/NavBar/NavBar";
import "./style.css"
import React, {useState} from "react";
import Wrapper from "./Components/hoc/Wrapper";

const App = () => {
  const [products, setProducts] = useState([
    { title: "React.js", price: "99 $", id:1, quantity:1},
    { title: "JavaScript", price: "79 $", id:2, quantity:2},
    { title: "VSCode", price: "58 $", id:3, quantity:4}
  ])

  const incrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id)
    const product = {...products[index]}
    product.quantity += 1
    const updatedProducts = [...products]
    updatedProducts[index] = product
    setProducts(updatedProducts)
  }
  
  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id)
    const product = {...products[index]}
    if (product.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      setProducts(filteredProducts);
    } else {
      const updatedProducts = [...products]
      product.quantity -= 1
      updatedProducts[index] = product
      setProducts(updatedProducts)
    }
  }

  const removeHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
  };

  const changeHandler = (event,id) => {
    const updatedProducts = [...products]
    const index = products.findIndex((item) => item.id === id) 
    const product = {...products[index]}
    product.title = event.target.value
    updatedProducts[index] = product
    setProducts(updatedProducts)
  };

  return ( 
    <>
      <NavBar totalItems = {products.filter((p) => p.quantity > 0).length}/>
      <ProductList 
        products={products}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
        onRemove={removeHandler}
        onChange={changeHandler}
      />
    </>
  );
}
 
export default Wrapper(App,"container");