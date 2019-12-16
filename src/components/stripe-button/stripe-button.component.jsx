import React from 'react'
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router-dom';

class StripeCheckoutButton extends React.Component {
    clickHandle() { 
        return 
    }
    render() {
        const { price, currentUser } = this.props;
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
            </StripeCheckout> : <button onClick={() => this.props.history.push('/signin')}  className="btn btn-primary">
                    Pay Now
                </button>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(withRouter(StripeCheckoutButton));