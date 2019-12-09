import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_A0v5iG1WXz4n3RCfV8uCE2gD00CpAFKE9n';


    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return(
        <StripeCheckout 
        label='Pay Now' 
        name="CRWN Clothing Ltd." 
        billingAddress 
        shippingAddress 
        image='https://svgshare.com/i/CUz.svg' 
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}/>
    );
} ;

export default StripeCheckoutButton;