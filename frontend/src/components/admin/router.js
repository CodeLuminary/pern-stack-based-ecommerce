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
                <div className={admincss.nav_top}>
                    <div><span className="uName"><i className="fa fa-user"></i>&nbsp;John Doe</span><span className={admincss.logout} Onclick={()=>{}} className="logou"><i class="fa fa-sign-out"></i>&nbsp;Log Out</span></div>        
                </div>
                <div className={admincss.app}>
                <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="products/add" element={<AddProduct />}/>
                    <Route path="products/view" element={<ViewProducts />} />
                </Routes>
                </div>
            </div>   
        </div>
    )
}
export default router