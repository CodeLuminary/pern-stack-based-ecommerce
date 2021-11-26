const Product=({productProperties,css})=>{
    
    return (
        <div className={css.product}>
            <img src={productProperties.image} alt={`${productProperties.name} `}/>
            <div>
                <span className={css.productName}>{productProperties.title}</span><br/>
                <span className={css.productPrice}>${productProperties.price}</span><br/>
                <p className={css.star}>
                    <span className={`glyphicon ${productProperties.rating.rate.toFixed() >= 1 ? 'glyphicon-star' : 'glyphicon-star-empty'}`}></span>
                    <span className={`glyphicon ${productProperties.rating.rate.toFixed() >= 2 ? 'glyphicon-star' : 'glyphicon-star-empty'}`}></span>
                    <span className={`glyphicon ${productProperties.rating.rate.toFixed() >= 3 ? 'glyphicon-star' : 'glyphicon-star-empty'}`}></span>
                    <span className={`glyphicon ${productProperties.rating.rate.toFixed() >= 4 ? 'glyphicon-star' : 'glyphicon-star-empty'}`}></span>
                    <span className={`glyphicon ${productProperties.rating.rate.toFixed() >= 5 ? 'glyphicon-star' : 'glyphicon-star-empty'}`}></span>
                </p>
                <p className={css.description}>${productProperties.description}</p>
            </div>
            
        </div>
    );
}

export default Product;