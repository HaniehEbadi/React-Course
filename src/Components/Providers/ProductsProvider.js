import React, { useContext, useState } from "react";

const ProductContext = React.createContext()
const ProductContextDispatcher = React.createContext()


const ProductsProvider = ({children}) => {
  const [products,setProducts] = useState([
    { title: "React.js", price: "99 $", id:1, quantity:1},
    { title: "JavaScript", price: "79 $", id:2, quantity:2},
    { title: "VSCode", price: "58 $", id:3, quantity:4}
  ])

  return (
  <ProductContext.Provider value={products}> 
    <ProductContextDispatcher.Provider value={setProducts}>
      {children} 
    </ProductContextDispatcher.Provider>
  </ProductContext.Provider>
  )
}

 
export default ProductsProvider;

export const useProducts = () => useContext(ProductContext)
export const useProductsActions = () => {
  const products = useContext(ProductContext)
  const setProducts = useContext(ProductContextDispatcher)

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

  return {removeHandler,incrementHandler,changeHandler,decrementHandler}
} 