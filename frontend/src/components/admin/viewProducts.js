import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setProducts } from "../../redux/reducers/productsReducer";
import api from "../../Api";
import homecss from "../../css/view_products.module.css"; 

const ViewProducts = ({setShowLoading}) =>{
    const products = useSelector((state)=>state.products.value);
    const dispatch = useDispatch();
    const [loadingState, setLoadingState] = useState("loading")

    const fetchProducts = async ()=>{
        api.getApi(`${process.env.REACT_APP_BACKEND_URL}/products`)
        .then(response=>response.json())
        .then(result=>{    console.log(result,"result") 
            dispatch(setProducts(result.data))
            setLoadingState("ready")
        })
        .catch(err=>{
            console.log(err, 'error')
            setLoadingState("error");
        })
    }

    useEffect(()=>{
        //alert(products.length)
        if(products.length == 0){
            fetchProducts();
        }
        else{
            setLoadingState("ready")
        }
    },[]);

    return (
        <div>
            <h1 style={{fontSize: 35}}>View Products</h1>
            <div className={`${homecss.product_div} col-12`}>
                {loadingState==="loading" ?
                    (<h2>Loading Products</h2>) :
                loadingState==="error" ?
                    (<h2>Error loading products</h2>) : products.length ===0 ?
                    <span>No product havae been added</span> :
                    
                    (<table>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Previous Price</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        {products.map((product)=>(
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.quantity}</td>
                                <td>{product.previous_price}</td>
                                <td>{product.price}</td>
                                <td>
                                    <span onClick={()=>{
                                        if(window.confirm('Are you sure you want to delete this product?')){
                                            setShowLoading(true)
                                            api.getApi('/account/delete-product/' + product.id)
                                            .then(response=>response.json())
                                            .then(result=>{      
                                                //setShowLoading(false);
                                                dispatch(setProducts(result.data)); 
                                                alert("Product deleted successfully");
                                            })
                                            .catch(err=>{
                                                //setShowLoading(false);
                                            alert("Action failed. Product could not be deleted.")
                                            })
                                        }
                                    }}>Delete</span>
                                </td>
                            </tr>
                            )
                        )}
                    </table>
                    ) 
                }
            </div>
        </div>
    )
}
export default ViewProducts;