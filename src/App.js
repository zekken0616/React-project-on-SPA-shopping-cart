import Checkout from "./Checkout";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { CartContext } from "./CartContext";
import { useState } from "react";

function App() {

  const [cartItems, setCartItems] = useState([])
  

  return (
    <BrowserRouter>
      <CartContext.Provider value={{cartItems, setCartItems}}>

        <Link to="/">Shopping cart</Link>
        <Link to="/checkout">checkout</Link>

        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/product" element={<ProductDetail/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="*" element={<p>can't find the page</p>}/>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
