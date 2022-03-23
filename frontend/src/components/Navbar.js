import "../css/navbar.css";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';

const Navbar = ({click}) =>{
    const cart = useSelector((state)=> state.cart)

    return (
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
    );
}

export default Navbar;