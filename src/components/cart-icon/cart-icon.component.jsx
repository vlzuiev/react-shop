import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/car.action';

const CartIcon = ({ toogleCartHidden }) => {
    return <div className='cart-icon' onClick={toogleCartHidden}>
        <CartLogo className='shopping-icon'/> 
        <span className='item-count'>0</span>
    </div>
}

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);