import React from 'react';

import './checkout-item.styles.scss';

import { connect } from 'react-redux'; 
import { clearItemFromCart, deleteOneItem, addItem } from '../../redux/cart/cart.action'
const CheckoutItem = ({ item, clearItem, deleteOne, addItem }) => {
    const {imageUrl, name, quantity, price} = item;
    return <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => deleteOne(item)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={() => addItem(item)}>&#10095;</div> 
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(item)}>&#10005;</div>
    </div>
}

const mapDispatchToProps = dispatch => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    deleteOne: (item) => dispatch(deleteOneItem(item)),
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);