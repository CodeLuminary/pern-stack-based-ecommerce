import './css/App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home.js';
//import Admin from './components/admin/dashboard';
import Admin from './components/admin/router'
import ProductDetails from './components/productDetails';
import Cart from './components/cart';
import AddProduct from './components/admin/addProducts';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="admin/*" element={<Admin />}>
        </Route>
      </Routes>
    </Router>
    );
}

export default App;
