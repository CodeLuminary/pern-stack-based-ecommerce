import Product from "./Product";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState, useLayoutEffect} from "react";
import api from '../Api'
import { setProducts } from "../redux/reducers/productsReducer";
import {useParams} from "react-router-dom";
import Navbar from './Navbar.js';
import detailscss from "../css/productDetails.module.css"
import { addItem } from "../redux/reducers/cartReducer";
import Modal from "./modal"

const ProductDetails = () =>{
    const products = useSelector((state)=>state.products.value);
    const cart = useSelector((state)=>state.cart)
    const dispatch = useDispatch();
    const [loadingState, setLoadingState] = useState("loading");
    const {id} = useParams();
    const [modalToggle, setModalToggle] = useState(false);
    const [shouldShow, setShouldShow] = useState(true);
    
    const fetchProducts = async () =>{
        api.getApi('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(result=>{
            dispatch(setProducts(result))
            setLoadingState("ready")
        })
        .catch(err=>{
            setLoadingState("error");
        })
    }

    const searchProductById = (id)=>{
        let beginning = 0; let end = products.length-1;
        while(beginning <= end){
            let middle = beginning + Math.floor((end - beginning)/2);

            if(products[middle].id === Number(id)){
                return products[middle];
            }
            else if(products[middle].id < id){              
                beginning = middle + 1
            }
            else{
                end = middle - 1;
            }
        }
        return products[0];
    } 

    useLayoutEffect(()=>{
        setShouldShow(true);
        if(products.length == 0){
            fetchProducts();
        }
        else{
            if(shouldShow) setLoadingState("ready")        
        }
        return ()=>{
            setShouldShow(false);
        }
    },[]);

    /*const searchForProductInCart = (id) =>{
        for(let i = 0; i < cart.total; i++){
            if(cart.value[i].id===id){
                return i;
            }
        }
        return -1;
    }*/

    const searchForProductInCart = (id) =>{
        for(let i = 0; i < cart.value.length; i++){
            if(cart.value[i].id===id){
                return i;
            }
        }
        return -1;
    }

    const addToCart = () =>{
        const cartResult = searchForProductInCart(Number(id));
        if(cartResult === -1){
            let product = searchProductById(id)
            product = {
                ...product,
                quantity:1
            }
            console.log(product)
            //localStorage.removeItem('cart')
            dispatch(addItem(product));
            let uCart = localStorage.getItem('cart');
            if(uCart == null){
                uCart = []; uCart.push(product);
                localStorage.setItem('cart',JSON.stringify(uCart));
            }
            else{
                uCart = JSON.parse(uCart);
                //alert(uCart.length);
                uCart.push(product);
                //alert(uCart.length);
                localStorage.setItem('cart',JSON.stringify(uCart));
            }
            setModalToggle(true)
        }    
    }

    return (
        <div>
            <Navbar />
            <Modal modalObject={{header:"",footer:"",body:"Item added to cart successfully"}} modalTogglee={modalToggle} closeModal={() => setModalToggle(false)} />
            <div className={`${detailscss.product_details_content} col-12`}>                
                {
                    loadingState==="loading" ?
                    (<h2>Loading Product</h2>) :
                    loadingState==="error" ?
                    (<h2>Error loading products</h2>) :
                    <Product productProperties={searchProductById(id)} css={detailscss} buttonObject={{click:addToCart,text:"Add To Cart"}}/>
                }
            </div>
        </div>
        
    )
}
export default ProductDetails;