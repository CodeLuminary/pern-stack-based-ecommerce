import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard'
import addProduct from './addProducts';
import viewProducts from './viewProducts';
const router = () =>{
    return (
        <Router>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="products/add" element={<addProduct />}/>
                <Route path="products/view" element={<viewProducts />} />
            </Routes>
        </Router>
    )
}
export default router