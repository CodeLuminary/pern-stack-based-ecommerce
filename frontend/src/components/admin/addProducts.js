import addPcss from "../../css/addProduct.module.css"
const AddProduct = () =>{
    return (
        <div>
            <h1>Add Product</h1>
            <span>Product Name<span className={addPcss.required}>*</span></span><br />
            <input type="text" className={addPcss.input} placeholder="Enter product name" /><br />
            <span>Product Amount<span className={addPcss.required}>*</span></span><br />
            <input type="text" className={addPcss.input} placeholder="Enter product amount" /><br />
            <span>Product Quantity<span className={addPcss.required}>*</span></span><br />
            <input type="number" className={addPcss.input} placeholder="Enter product name" /><br />
            <span>Product Description<span className={addPcss.required}>*</span></span><br />
            <textarea className={addPcss.input}>
            </textarea><br />
            <span>Product Image<span className={addPcss.required}>*</span></span><br />
            <input type="file" className={addPcss.insert} />
            <p className={addPcss.btnP}>
                <button className={addPcss.btn}>Add Product</button>
            </p>
        </div>
    )
}
export default AddProduct;