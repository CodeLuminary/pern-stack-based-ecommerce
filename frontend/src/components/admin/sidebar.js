import sidebar from "../../css/sidebar.module.css";
import {Link} from "react-router-dom"

const Sidebar = () =>{
    return (
        <div class={sidebar.nav}>
            <Link to="/" class={sidebar.nav__link} data-link><span></span><i class="fa fa-th-large"></i><span>Dashboard</span></Link>
            <Link to="products/add" class={sidebar.nav__link} data-link><span></span><i class="fa fa-comment"></i><span>Add Product</span></Link>
            <Link to="products/view" class={sidebar.nav__link} data-link><span></span><i class="fa fa-cog"></i><span>View Product</span></Link>
            <div class={sidebar.menuDet}><button id="clos">&#10094;</button><button id="opn">&#10095;</button></div>
        </div>
    )
}
export default Sidebar;