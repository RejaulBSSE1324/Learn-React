import React from 'react';
import { Link} from "react-router-dom";
import '../Product/./Product.css' ;

const Cart = (props) => {
    const cart=props.cart;
    const total =cart.reduce((total,p) => total+p.price, 0)
    return (
        <div className="product-info">
            <h2>Order Summary</h2>
            <p>Items ordered:{cart.length}</p>
            <p>Total:{total}</p>
            <Link to="/review">
            <button className='product-info button'>Review</button>
            </Link>
        </div>
    );
};

export default Cart;