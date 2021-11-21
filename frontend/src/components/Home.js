import "../css/home.css";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import api from '../Api'
import { setProducts } from "../redux/reducers/productsReducer";

const Home = () =>{
    //const products = useSelector((state)=>state.products);
    const dispatch = useDispatch();
    
    const fetchProducts = async () =>{
        api.getApi('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(result=>{
            dispatch(setProducts(result))
        })
    }

    useEffect(()=>{
        fetchProducts();
    },[]);
    

    return(
        <div className="product-div">
            <h1>Good</h1>
        </div>
    )
}

export default Home;