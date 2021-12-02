import { useDispatch, useSelector } from "react-redux";
import cartcss from "../css/cart.module.css";
import Navbar from './Navbar.js';
import Product from "./Product";
import { decrementItemQuantity, incrementItemQuantity, removeItem } from "../redux/reducers/cartReducer";

const Cart = () =>{
    const cart = useSelector((state)=> state.cart);

    const removeItemFromCart = () =>{

    }

    alert(cart.value[0].title)

    return (
        <div>
            <Navbar /> 
            <div className={cartcss.cart_panel}>
                <p className={cartcss.item_total}>Cart ({`${cart.total} ${cart.total <= 1 ? "item": "items"}`})</p>
                {
                    (cart.value.map((cart_item)=>(
                        <div className={cartcss.cart_item_div} key={cart_item.id}>Good
                            <Product productProperties={cart_item} css={cartcss} buttonObject={{click:removeItemFromCart,text:"Remove Item"}}/>
                        </div>
                    )))
                }
            </div>
        </div>
    )
}
export default Cart;