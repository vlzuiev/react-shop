import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/car.selectors'
import CartDropdown from './cart-dropdown.component';

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropdownContainer = compose(
    withRouter,
    connect(mapStateToProps)
)(CartDropdown);

export default CartDropdownContainer;