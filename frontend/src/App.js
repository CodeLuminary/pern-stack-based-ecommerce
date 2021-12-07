import './css/App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home.js';
import Admin from './components/admin/router'
import ProductDetails from './components/productDetails';
import Cart from './components/cart';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="admin/*" element={<Admin />}>
            <Route path="products/add" element={<addProduct />}/>
            <Route path="products/view" element={<viewProducts />} />
        </Route>
      </Routes>
    </Router>
    );
}

export default App;
