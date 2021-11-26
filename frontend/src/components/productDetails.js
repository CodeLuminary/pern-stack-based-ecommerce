import Product from "./Product";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState} from "react";
import api from '../Api'
import { setProducts } from "../redux/reducers/productsReducer";
import {useParams} from "react-router-dom";
import Navbar from './Navbar.js';
import "../css/productDetails.css"

const ProductDetails = () =>{
    const products = useSelector((state)=>state.products.value);
    const dispatch = useDispatch();
    const [loadingState, setLoadingState] = useState("loading");
    const {id} = useParams();
    
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
            let middle = Math.floor((end - beginning)/2);

            if(products[middle].id === id){
                return products[middle];
            }
            else if(id < products[middle].id){
                end = middle;
            }
            else{
                beginning = middle
            }
        }
    } 

    useEffect(()=>{
        if(products.length === 0){
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
                    <Product productProperties={products[id]}/>
                }
            </div>
        </div>
        
    )
}
export default ProductDetails;