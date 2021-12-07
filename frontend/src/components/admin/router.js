import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard'
import AddProduct from './addProducts';
import ViewProducts from './viewProducts';
import Sidebar from './sidebar';
import admincss from '../../css/admin.module.css'
const router = () =>{
    return (
        <div>
            <Sidebar />
            <div className={admincss.content}>
                <div class="nav_top">
                    <div><span id="uName" class="uName"><i class="fa fa-user"></i>&nbsp;John Doe</span><span className={admincss.logout} onclick="logout()" class="logou"><i class="fa fa-sign-out"></i>&nbsp;Log Out</span></div>        
                </div>
                <div className={admincss.app}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="products/add" element={<AddProduct />}/>
                    <Route path="products/view" element={<ViewProducts />} />
                </Routes>
                </div>
            </div>   
        </div>
    )
}
export default router