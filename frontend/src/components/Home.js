import "../css/home.css";
//import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import api from '../Api'

const Home = () =>{
    //const products = useSelector((state)=>state.products);
    //const dispatch = useDispatch();
    
    const fetchProducts = async () =>{
        api.getApi('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(result=>{
            alert(result)
        })
    }

    useEffect(()=>{
        console.log("Entered")
        fetchProducts();
    },[]);

    console.log("good")

    return(
        <div className="product-div">
            <h1>Good</h1>
        </div>
    )
}

export default Home;