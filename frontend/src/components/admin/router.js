import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard'
import AddProduct from './addProduct';
import ViewProducts from './viewProducts';
import Sidebar from './adminSideBar2';
import admincss from '../../css/admin.module.css'
const router = () =>{
    return (
        <div>
            <Sidebar />
            <div className={admincss.content}>
                <div className={admincss.nav_top}>
                    <div><div><span className="uName"><i className="fa fa-user"></i>&nbsp;John Doe</span></div></div>      
                </div>
                <div className={admincss.app}>
                <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="add-product" element={<AddProduct />}/>
                    <Route path="products/view" element={<ViewProducts />} />
                </Routes>
                </div>
            </div>   
        </div>
    )
}
export default router