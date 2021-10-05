import React from 'react'

const ReviewItem = (props) => {
    const { name, price, quantity, img, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <img src={img} alt="image" />
            </div>

            <div className="col-md-6 col-sm-12">
                <h4>{name}</h4>
                <p>Price: $ <span>{price}</span></p>
                <p>Quantity: {quantity}</p>
                <button onClick={()=> handleRemove(key)} className="btn btn-primary">Remove</button>
            </div>

            <hr />
        </div>
    )
}

export default ReviewItem
