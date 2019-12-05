import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/car.selectors';

import { toggleCartHidden } from '../../redux/cart/car.action';

const CartIcon = ({ toogleCartHidden, itemCount }) => {
    return <div className='cart-icon' onClick={toogleCartHidden}>
        <CartLogo className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
}

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);