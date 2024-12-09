import React from 'react';
import './Product.css';
import { FaShoppingCart } from "react-icons/fa";

const Product = (props) => {
    //console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <h4>{name}</h4>
                <br />
                <p><small>By:{seller}</small></p>
                <br />
                <p>${price}</p>
                <br />
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)}> 
                    <FaShoppingCart />  Add to cart
                </button>

            </div>
        </div>
    );
};

export default Product;