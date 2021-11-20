import "../css/home.css";
import { useDispatch,useSelector } from "react-redux";

const Home = () =>{
    const products = useSelector((state)=>state.products);
    const dispatch = useDispatch();
    
    
}

export default Home;