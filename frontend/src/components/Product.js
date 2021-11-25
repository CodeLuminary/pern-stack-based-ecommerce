const Product=({productProperties})=>{
    return (
        <div className="product">
            <img src={productProperties.image} alt={`${productProperties.name} `}/>
            <span className="productName">{productProperties.title}</span><br/>
            <span className="productPrice">${productProperties.price}</span>
        </div>
    );
}

export default Product;