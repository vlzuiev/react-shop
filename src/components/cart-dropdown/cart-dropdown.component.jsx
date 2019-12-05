import React from 'react';
import CustomButton from '../custom-button/cutom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/car.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/car.action';


const CartDropDown = ({ cartItems, history, dispatch }) => {
    return <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length
                    ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <span className='empty-message'>Your cart is empty </span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
}
 
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));