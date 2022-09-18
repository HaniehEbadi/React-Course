import ProductList from "./Components/Product/ProductList";
import NavBar from "./Components/NavBar/NavBar";
import "./style.css"
import Wrapper from "./Components/hoc/Wrapper";
import ProductsProvider from "./Components/Providers/ProductsProvider"

const App = () => {

  return ( 
    <>
      <ProductsProvider>
        <NavBar />
        <ProductList />
      </ProductsProvider>
    </>
  );
}
 
export default Wrapper(App,"container");