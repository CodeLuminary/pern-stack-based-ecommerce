import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartcss from "../css/cart.module.css";
import Navbar from './Navbar.js';
import Product from "./Product";
import {RiDeleteBin2Fill} from "react-icons/ri"
import {BiMinus, BiPlus} from "react-icons/bi";
import {BsCart3} from "react-icons/bs";
import { Link } from "react-router-dom";
import { decrementItemQuantity, incrementItemQuantity, removeItem } from "../redux/reducers/cartReducer";

const Cart = () =>{
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart.value)); 
    })

    return (
        <div>
            <Navbar /> 
            <div className={`${cartcss.cart_panel} col-12`}>
                {cart.value.length <= 0 ? 
                    (
                        <div className={cartcss.emptyCart}>
                            <span><BsCart3 className={cartcss.icon} /></span>
                            <h2>Your cart is empty</h2>
                            <p>
                                <Link className={cartcss.start} to="/">Start Shopping</Link>
                            </p>
                        </div>
                    )
                : 
                    (
                    <div>
                        <p className={cartcss.item_total}>Cart ({`${cart.total} ${cart.total <= 1 ? "item": "items"}`})</p>
                    </div>
                    )
                }
                    <div className={`${cartcss.uCart} col-12`}>
                        <div className={`col-9`}>
                        {cart.value.map((cart_item)=>(           
                            <div className={`${cartcss.cItem} col-12`} key={cart_item.id}>
                                <img width="100" src={cart_item.image} alt={`${cart_item.name} `} />
                                <div>
                                    <span className={cartcss.productName}>{cart_item.title}</span><br />
                                    
                                    <span className={cartcss.prices}>
                                        <span className={cartcss.productPrice}>${cart_item.price}</span>
                                        <span className={cartcss.pprice}><del>$35</del></span><br/>
                                        <span className={cartcss.reduction}>-10%</span>
                                    </span>
                                    <span>Variation: nil</span>
                                </div>
                                <div className={cartcss.addRemove}>
                                    <span className={`${cartcss.delete}`}
                                        onClick={()=>{
                                            if(window.confirm("Are you sure you want to delete this item from cart?")){
                                                dispatch(removeItem(cart_item));
                                                alert("item deleted from cart successfully");
                                            }
                                        }}
                                    ><RiDeleteBin2Fill className={cartcss.icon} /> <span>Delete</span></span>
                                    <span className={cartcss.maddrem}>
                                        <BiMinus onClick={()=>{
                                            if(cart_item.quantity > 1){
                                                dispatch(decrementItemQuantity(cart_item));
                                            }
                                        }} className={cartcss.icon}/><span className={cartcss.input}>{cart_item.quantity}</span><BiPlus
                                            onClick={()=>{
                                                dispatch(incrementItemQuantity(cart_item));
                                            }}
                                        className={cartcss.icon} />
                                    </span>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <div className={`col-3`} style={{display: cart.value.length > 0 ? 'block': 'none'}}>
                        <div className={cartcss.summary}>
                            <span>Cart Summary</span><br />
                            <span>Subtotal</span><span className={cartcss.subtotal}>${cart.sum.toFixed(2)}</span><br />
                            <span>Shipping</span><span className={cartcss.subtotal}>$0.00</span>
                            <div>
                                <span style={{fontWeight:'bold'}}>Total</span><span className={cartcss.subtotal}>${cart.sum.toFixed(2)}</span>
                                <p>
                                    <Link to="/">CheckOut</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
            </div>
            </div>
    )
}
export default Cart;