import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { selectCartItems, selectCartTotal } from '../../redux/cart/car.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
 
const CheckoutPage = ({ cartItems, totalPrice }) => {
    
    return <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span> 
            </div>
            <div className='header-block'>
                <span>Quantity</span> 
            </div>
            <div className='header-block'>
                <span>Price</span> 
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div> 
        {
            cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)
        }
        <div className='total'>
            <span>TOTAL: ${totalPrice}</span>
        </div>
        <div className='test-warning'>
             *Please use the following test credit card for payments* 
             <br/>
             4242 4242 4242 4242 - Exp: 10/20 - CVV: 123 
        </div>
        <StripeCheckoutButton price={totalPrice} /> 
    </div>
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);