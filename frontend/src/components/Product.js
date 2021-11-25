const Product=({productProperties})=>{
    return (
        <div className="product">
            <img src={productProperties.image} alt={`${productProperties.name} `}/>
            <span className="productName">{productProperties.title}</span>
            <span className="productPrice">{productProperties.price}</span>
            <p className="productDescription">{productProperties.description}</p>
        </div>
    );
}

export default Product;