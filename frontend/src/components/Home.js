import "../css/home.css";
import { useDispatch,useSelector } from "react-redux";

const Home = () =>{
    const products = useSelector((state)=>state.products);
    const dispatch = useDispatch();
    
    const fetchProduct = async () =>{
        
    }

    return(
        <div className="product-div">
            
        </div>
    )
}

export default Home;