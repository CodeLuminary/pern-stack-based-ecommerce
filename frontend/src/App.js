import './css/App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home.js';
import Admin from './components/admin/router'
import productDetails from './components/productDetails';
import cart from './components/cart';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="product/:id" element={<productDetails />} />
        <Route path="cart" element={<cart />} />
        <Route path="admin/*" element={<Admin />} />
      </Routes>
    </Router>
    );
}

export default App;
