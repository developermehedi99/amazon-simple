import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, quantity, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>price: ${price}</p>
                <p>Manufecturer:{seller}</p>
                <p>rating:{ratings}stars</p>
            </div>

            <button className='btn-cart'>Add to cart</button>

        </div>
    );
};

export default Product;