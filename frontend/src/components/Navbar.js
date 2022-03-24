import "../css/navbar.css";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';

import {AiOutlineSearch,AiOutlineHome} from "react-icons/ai";
import {BsCart3,BsListUl} from "react-icons/bs";
import {FaHome,FaUserCog} from "react-icons/fa";
import headercss from "../css/header.module.css";

const Navbar = ({click}) =>{
    const cart = useSelector((state)=> state.cart)

    return (
      <>
        <div className={`col-12 ${headercss.mobileFot}`}>
                <Link to="/"><FaHome className={`${headercss.icon} ${headercss.active}`} /><br /><span className={`${headercss.mTxt}`}>Home</span></Link>
                <Link to="/"><BsListUl className={headercss.icon} /><br /><span className={`${headercss.mTxt}`}>Categories</span></Link>
                <Link className={headercss.cart} to="/cart"><BsCart3 style={{fontSize:25}}/>
                        <span>{cart.total}</span>
                        <br /><a className={`${headercss.mTxt}`}>Cart</a>
                </Link>
                <Link to="/"><FaUserCog className={headercss.icon} /><br /><span className={`${headercss.mTxt}`}>Account</span></Link>
            </div>
            
        <nav className="navbar">
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
      <div className="navbar__logo">
        <Link to="/" ><h2>PERN Shopping Cart</h2></Link>
      </div>

      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart <span className="cartlogo__badge">{cart.total}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      
    </nav>
    </>
    );
}

export default Navbar;