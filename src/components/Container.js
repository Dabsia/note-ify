import React, { useState } from "react";
import './Container.css';
import Item from "./Item";
import Cart from "./Cart";

const Container = () => {



    const [products, setProducts] = useState([
        { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
        { id: 2, name: "Smartphone", price: 800, category: "Electronics" },
        { id: 3, name: "Headphones", price: 150, category: "Accessories" },
        { id: 4, name: "Backpack", price: 50, category: "Fashion" },
        { id: 5, name: "Smartwatch", price: 200, category: "Wearable Tech" },
        { id: 6, name: "Keyboard", price: 100, category: "Computer Accessories" },
        { id: 7, name: "Gaming Mouse", price: 80, category: "Gaming" }]
    );

    return (
        <div style={{ display: 'block' }} className="">
            <p>Hellllow learning Zustand</p>
            <div className="container" >
                {
                    products?.map(product => {
                        return <Item item={product} key={product.id} />
                    })
                }
            </div>
            <Cart />
        </div>
    );
};

export default Container;