import addPcss from "../../css/addProduct.module.css";
import { useRef,useState } from "react";
import api from "../../Api"
import { useDispatch} from "react-redux";
import { setProducts } from "../../redux/reducers/productsReducer";
import {Editor, EditorState} from "draft-js";
//import Loading from "../../components/loading2";

const AddProduct = ({setShowLoading}) =>{
    const dispatch = useDispatch();
    
    const productName = useRef();
    const productAmount = useRef();
    const productQuantity = useRef();
    const productDescription = useRef();
    const productPreviousPrice = useRef();
    const image = useRef(); 
    const otherImages = useRef();
    return (
        <div>
            
            <h1 style={{fontSize: 22, marginTop: 0}}>Add Product</h1>
            <div className={addPcss.contentDiv}>
                <span className={addPcss.divTitle}>PRODUCT INFORMATION</span>
                <div className={addPcss.mainContent}>
                    <span>Product Name<span className={addPcss.required}>*</span></span><br />
                    <input type="text" ref={productName} className={addPcss.input} placeholder="Enter product name" /><br />
                    <span>Product Quantity<span className={addPcss.required}>*</span></span><br />
                    <input type="number" ref={productQuantity} className={addPcss.input} placeholder="Enter product quantity" /><br />
                    <span>Product Price<span className={addPcss.required}>*</span></span><br />
                    <input type="text" ref={productAmount} className={addPcss.input} placeholder="Enter product price in dollars" /><br />    
                    <span>Product Previous Price<span className={addPcss.required}>*</span></span><br />
                    <input type="text" ref={productPreviousPrice} className={addPcss.input} placeholder="Enter product previous price in dollars" /><br />  
                    <span>Product Description<span className={addPcss.required}>*</span></span><br />
                    <textarea ref={productDescription} style={{borderRadius: 5}} className={addPcss.input} placeholder="Enter product description">
                    </textarea> <br />
                    <span>Product Main Image<span className={addPcss.required}>*</span></span><br />
                    <input ref={image} type="file" /><br />
                    <span>Product Other Images<span className={addPcss.required}>*</span></span><br /> 
                    <input ref={otherImages} type="file" multiple />  
                    <p className={addPcss.btnP}>
                <button className={addPcss.btn} onClick={()=>{
                    setShowLoading(true);
                    let formData = new FormData();
                    formData.append("title", productName.current.value);
                    formData.append("price", productAmount.current.value);
                    formData.append("previous_price", productPreviousPrice.current.value);
                    formData.append("quantity", productQuantity.current.value);
                    formData.append("description", productDescription.current.value);               
                    formData.append("file",image.current.files[0]);
                    //formData.append("files",otherImages.current.files);
                    //alert(otherImages.current.files.length)
                    for(let q = 0; q < otherImages.current.files.length; q++){
                        formData.append("files", otherImages.current.files[q]);
                    } 
                    /*const product = {
                        title: productName,
                        price: productAmount,
                        quantity: productQuantity,
                        description: productDescription,
                        rate: "0"
                    }*/
                    api.PostFormData(`${process.env.REACT_APP_BACKEND_URL}/add-product`, formData)
                    .then(result=>{     
                        //setShowLoading(false)  
                        dispatch(setProducts(result.data)); 
                        alert(result.message);
                        console.log(result)
                    })
                    .catch(err=>{
                        //setShowLoading(false);
                        console.log(err)
                       alert(err)
                    })
                }}>Add Product</button>
            </p>
             
                </div>
            </div>
            
        </div>
    )
}
export default AddProduct;