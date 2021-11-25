import "../css/home.css";
import { useDispatch,useSelector } from "react-redux";
import { useEffect,useState} from "react";
import api from '../Api'
import { setProducts } from "../redux/reducers/productsReducer";
import Product from "./Product";
import {Link} from "react-router-dom";

const Home = () =>{
    const products = useSelector((state)=>state.products.value);
    const dispatch = useDispatch();
    const [loadingState, setLoadingState] = useState("loading")
    
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
        fetchProducts();
    },[]);
    

    return(
        <div className="product-div">
            {loadingState==="loading" ?
                (<h1>Loading Products</h1>) :
            loadingState==="error" ?
                (<h1>Error loading products</h1>) :
                (products.map((product)=>(
                            <Link to={`/product/${product.id}`} key={product.id}>
                                <div className="product-parent col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <Product productProperties={product} />
                                    
                                </div>
                            </Link>
                        )
                    )
                )   
            }
            <div>

            </div>
        </div>
    )
}

export default Home;