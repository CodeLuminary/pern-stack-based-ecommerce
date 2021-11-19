import "../css/navbar.css";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'

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
        <h2>MERN Shopping Cart</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart <span className="cartlogo__badge">{cart.tota}</span>
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