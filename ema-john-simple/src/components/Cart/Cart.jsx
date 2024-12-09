import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    const total =cart.reduce((total,p) => total+p.price, 0)
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items ordered:{cart.length}</p>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cart;