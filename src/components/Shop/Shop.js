import React, { useEffect, useState } from 'react'
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'
import { Link } from 'react-router-dom'

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

    //add the product into the cart . 
    const handleAddToCart = (product) => {
        const exist = cart.find(pd => pd.key === product.key);
        let newCart = []
        if(exist){
            const rest = cart.filter(pd => pd.key !== product.key);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, product]
        }else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
    
        setCat(newCart);
        console.log(product);

        //save to the local storage
        addToDb(product.key);
    }
    //end the product into the cart

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
                        <Cart cart={cart}>
                            <Link to="/order">
                                <button className="btn btn-primary">Review Your Order</button>
                            </Link>
                        </Cart>
                    </div>  	    
                </div>
            </div>
        </div>
        
    )
}

export default Shop
