import { useDispatch, useSelector } from "react-redux";
import cartcss from "../css/cart.module.css";
import Navbar from './Navbar.js';
import { decrementItemQuantity, incrementItemQuantity, removeItem } from "../redux/reducers/cartReducer";

const Cart = () =>{
    const cart = useSelector((state)=> state.cart)

    return (
        <div>
            <Navbar />
            <div className={cartcss.cart_panel}>
                <p className={cartcss.item_total}>Cart ({`${cart.total} ${cart.total <= 1 ? "item": "items"}`})</p>
                
            </div>
        </div>
    )
}
export default Cart;