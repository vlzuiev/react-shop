import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector} from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return <div id='cart-icon-block' className='cart-icon' onClick={toggleCartHidden}>
        <CartLogo className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);