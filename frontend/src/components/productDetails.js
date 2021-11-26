import Product from "./Product";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState} from "react";
import api from '../Api'
import { setProducts } from "../redux/reducers/productsReducer";
import {Link} from "react-router-dom";
import Navbar from './Navbar.js'

const productDetails = () =>{
    

    return (
        <div>
            <Navbar />
            <div className="product-details-content">                
                <Product />
            </div>
        </div>
        
    )
}
export default productDetails;