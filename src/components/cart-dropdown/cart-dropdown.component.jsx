import React from 'react';
import CustomButton from '../custom-button/cutom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/car.selectors'
import {createStructuredSelector} from 'reselect'
 
const CartDropDown = ({cartItems}) => {
    return <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length 
                ? cartItems.map( item => <CartItem key={item.id} item={item}/>)
                : <span className='empty-message'>Your cart is empty </span>
            } 
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropDown);