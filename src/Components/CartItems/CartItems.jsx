import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContex'
//import all_product from './../Assets/all_product';

const CartItems = () => {
    const {all_product, CartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        <div>
            <div className="cartitems-format">
                <img src="" alt="" className='carticon-product-icon' />
                <p></p>
                <p></p>
                <button className='cartitems-quantity'></button>
            </div>
        </div>
    </div>
  )
}

export default CartItems