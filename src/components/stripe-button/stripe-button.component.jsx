import React from 'react'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors'; 
import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router-dom';
 

const StripeCheckoutButton = ({price, history}) => {  
        const currentUser = useSelector(selectCurrentUser); 
       
        const priceForStripe = price * 100;
        const publishableKey = 'pk_test_A0v5iG1WXz4n3RCfV8uCE2gD00CpAFKE9n'; 

        const onToken = token => { 
            alert('Payment Successful')
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
            </StripeCheckout> : <button onClick={() => history.push('/signin')}  className="btn btn-primary">
                    Pay Now
                </button>
        );
    
};
  
export default withRouter(StripeCheckoutButton);