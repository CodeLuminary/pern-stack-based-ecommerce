import Product from "./Product";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState} from "react";
import api from '../Api'
import { setProducts } from "../redux/reducers/productsReducer";
import {Link, useParams} from "react-router-dom";
import Navbar from './Navbar.js';

const ProductDetails = () =>{
    const products = useSelector((state)=>state.products.value);
    const dispatch = useDispatch();
    const [loadingState, setLoadingState] = useState("loading");
    const {id} = useParams();
    
    const fetchProducts = async () =>{
        api.getApi('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(result=>{
            setLoadingState("ready")
            dispatch(setProducts(result))
        })
        .catch(err=>{
            setLoadingState("error");
        })
    }

    useEffect(()=>{
        if(products.length == 0){
            fetchProducts();
        }
        else{
            setLoadingState("ready")
        }
        //alert(id)
    },[]);

    return (
        <div>
            <Navbar />
            <div className="product-details-content">                
                {
                    loadingState==="loading" ?
                    (<h2>Loading Product</h2>) :
                    loadingState==="error" ?
                    (<h2>Error loading products</h2>) :
                    <Product />
                }
            </div>
        </div>
        
    )
}
export default ProductDetails;