import React from 'react'
import useCart from '../../Hooks/useCart'
import useProducts from '../../Hooks/useProducts'
import { deleteFromDb } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem'
import '../Shop/Shop.css'

const OrderReview = () => {
    const[products, setProducts] = useProducts()
    const[cart, setCart] = useCart(products)
    const handleRemove = key => {
        const newCart = cart.filter(product=> product.key != key)
        setCart(newCart);
        deleteFromDb(key);
    }
    return(
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-8 col-12">
                    <div className="product-container">
                        {
                            cart.map(product =><ReviewItem  key={product.key} product={product} handleRemove={handleRemove}></ReviewItem>)
                        }
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="cart-container">
                        <Cart cart={cart}>
                            
                        </Cart>
                    </div>  	    
                </div>
            </div>
        </div>
    )
}

export default OrderReview
