import React from 'react'
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {name, img, seller, price, stock, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="prouduct-image" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>Price: $<span>{price}</span></p>
                <p><small>Only {stock} left in stock - order soon</small></p>

                {/* reating start */}
                    <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"

                    readonly />
                {/* reating end */}
                <br />

                <button onClick={() => props.handleAddToCart(props.product)} className="btn btn-cart"><i className="fas fa-cart-plus"></i> add to Cart</button>
            </div>
        </div>
    )
}

export default Product
