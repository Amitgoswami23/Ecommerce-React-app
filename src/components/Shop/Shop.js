import React, { useEffect, useState } from 'react'
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([])
    const[cart, setCat] = useState([])

    useEffect(()=>{
        fetch('./products.JSON')
        .then(response=> response.json())
        .then(data => setProducts(data))
    }
    ,[])

    // save to local storage value into cart
    useEffect(()=>{
        if(products.length){
            const saveCart = getStoredCart()
            const storedCart = [] 
                for(const key in saveCart){
                    const addProduct = products.find(product => product.key === key);
                    // console.log(key, addProduct);
                    if(addProduct){
                        const quantity = saveCart[key];
                        addProduct.quantity = quantity;
                        storedCart.push(addProduct);
                    }
                    
            }

            setCat(storedCart)
        }
    } 
    ,[products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCat(newCart);
        console.log(product);

        //save to the local storage
        addToDb(product.key);
    }
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-8 col-12">
                    <div className="product-container">
                
                        {
                            products.map(product => <Product key={product.key} product={product} handleAddToCart={handleAddToCart} />)
                        }
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="cart-container">
                        <Cart cart={cart} />
                    </div>  	    
                </div>
            </div>
            <div className="shop-container">
                
                
            </div>
        </div>
        
    )
}

export default Shop
