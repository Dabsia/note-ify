import React from 'react'
import { useCartStore } from '../store/cart-store'
import CartItem from './CartItem'

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCartStore()
    let content = null
    // console.log(cart)
    if (cart?.length > 0) {
        content = <div className="container" >{
            cart?.map(item => {
                return <CartItem item={item} key={item.id} />
            })}
        </div>
    }
    else {
        content = <p>No items in the cart</p>
    }

    return (
        <div>
            <h1>This is the cart</h1>
            {
                content
            }
            <button onClick={() => clearCart()} >Clear All Items</button>
        </div>
    )
}

export default Cart