import React from 'react'
import { useSelector, connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { compose } from 'redux';
import { clearCart } from '../../redux/cart/car.action'

const StripeCheckoutButton = ({ price, history, clearCart }) => {
    const currentUser = useSelector(selectCurrentUser);

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_A0v5iG1WXz4n3RCfV8uCE2gD00CpAFKE9n';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment was Succesful'); 
            clearCart();
        }).catch(err => {
            console.log('Payment err: ', JSON.parse(err))
            alert("There was an issue with your credit cart. Please make sure you use the provided credit card")
        });
    }

    return (
        currentUser ? <StripeCheckout
            label='Pay Now'
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}>
            <button className="btn btn-primary">
                Pay Now
                </button>
        </StripeCheckout> : <button onClick={() => history.push('/signin')} className="btn btn-primary">
                Pay Now
                </button>
    );

};

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart())
});

export default compose(withRouter,
    connect(null, mapDispatchToProps))(StripeCheckoutButton);