import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const cart = props.cart; option-1
    const {cart} = props;

    let totalPrice = 0;
    let totalShipping= 0;
    for(const product of cart){
        totalPrice= totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    let totalTax = totalPrice*3/100;
    let grandTotal = totalPrice + totalShipping + totalTax;

    return (
        <div className='order-summary'>
            <h3>Order Summary</h3>
            <p>selected items: {cart.length}</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Shipping Charge: ${totalShipping}</p>
            <p>Tax: $ {totalTax}</p>
            <h6>Grand Total: $ {grandTotal}</h6>
        </div>
    );
};

export default Cart;