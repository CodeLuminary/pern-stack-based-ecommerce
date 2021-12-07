import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard'
import AddProduct from './addProducts';
import viewProducts from './viewProducts';
const router = () =>{
    return (
        <div>
            <Routes>
                <Route path="products/add" element={<AddProduct />}/>
                <Route path="products/view" element={<viewProducts />} />
            </Routes>
        </div>
    )
}
export default router