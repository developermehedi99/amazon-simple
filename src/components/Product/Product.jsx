import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, quantity, ratings } = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>price: ${price}</p>
                <p>Manufecturer:{seller}</p>
                <p>rating:{ratings}stars</p>
            </div>

            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add to cart  <FontAwesomeIcon icon={faShoppingCart} /></button>

        </div>
    );
};

export default Product;