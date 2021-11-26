const Product=({productProperties})=>{
    
    return (
        <div className="product">
            <img src={productProperties.image} alt={`${productProperties.name} `}/>
            <span className="productName">{productProperties.title}</span><br/>
            <span className="productPrice">${productProperties.price}</span><br/>
            <p className="star">
                <span className={`glyphicon ${productProperties.rating.rate.toFixed() >= 1 ? 'glyphicon-star' : 'glyphicon-star-empty'}`}></span>
                <span className={`glyphicon ${productProperties.rating.rate.toFixed() >= 2 ? 'glyphicon-star' : 'glyphicon-star-empty'}`}></span>
                <span className={`glyphicon ${productProperties.rating.rate.toFixed() >= 3 ? 'glyphicon-star' : 'glyphicon-star-empty'}`}></span>
                <span className={`glyphicon ${productProperties.rating.rate.toFixed() >= 4 ? 'glyphicon-star' : 'glyphicon-star-empty'}`}></span>
                <span className={`glyphicon ${productProperties.rating.rate.toFixed() >= 5 ? 'glyphicon-star' : 'glyphicon-star-empty'}`}></span>
            </p>
            <p className="desciption">${productProperties.description}</p>
        </div>
    );
}

export default Product;