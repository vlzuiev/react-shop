//selectors / redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser, selectShowMenu } from '../../redux/user/user.selectors';
import { toggleShowMenu } from '../../redux/user/user.action';
import Header from './header.component';

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    showMenu: selectShowMenu
});  

const mapDispatchToProps = dispatch => ({
    toggleShowMenu: () => dispatch(toggleShowMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);