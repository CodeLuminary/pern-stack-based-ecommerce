const Product=({productProperties})=>{
    const getRating = () =>{
        let spanArr = []
        for(let i = 1; i <= productProperties.rating.rate.toFixed(0); i++){
            spanArr.push('<span className="glyphicon glyphicon-star"></span>')
        }
    }
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
        </div>
    );
}

export default Product;