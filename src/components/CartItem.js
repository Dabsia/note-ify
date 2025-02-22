import React from 'react'
import './Item.css'
import { useCartStore } from '../store/cart-store'

const CartItem = ({ item }) => {

    const { removeFromCart } = useCartStore()

    return (
        <div className='item-Container' >
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <button onClick={() => removeFromCart(item.id)} >Remove Item</button>
        </div>
    )
}

export default CartItem