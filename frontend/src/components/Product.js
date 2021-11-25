const Product=({productProperties})=>{
    return (
        <div className="product">
            <img src={productProperties.image} alt={`${productProperties.name} `}/>
            <span className="productName">{productProperties.title}</span><br/>
            <span className="productPrice">${productProperties.price}</span><br/>
            <p className="star">
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
            </p>
        </div>
    );
}

export default Product;