import React from 'react'
import './Item.css'
import { useCartStore } from "../store/cart-store";

const Item = ({ item }) => {

    const { addToCart } = useCartStore()

    return (
        <div className='item-Container' >
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <button onClick={() => addToCart(item)} >Add to Cart</button>
        </div>
    )
}

export default Item