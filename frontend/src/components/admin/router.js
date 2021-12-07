import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard'
import AddProduct from './addProducts';
import ViewProducts from './viewProducts';
import Sidebar from './sidebar';
const router = () =>{
    return (
        <div>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="products/add" element={<AddProduct />}/>
                <Route path="products/view" element={<ViewProducts />} />
            </Routes>
        </div>
    )
}
export default router