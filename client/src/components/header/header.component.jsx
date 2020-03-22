import React  from 'react'; 
import { ReactComponent as Logo } from '../../assets/crown.svg'; 
//js styles
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

//selectors / redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/car.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

//components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.container'; 
import { signOutStart } from '../../redux/user/user.action'
 

const Header = ({ currentUser, hidden, signOutStart }) => {
    return <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink> 
            <OptionLink to='/contact'>CONTACT</OptionLink> 
            {
                currentUser ? <OptionLink as='div' to='' onClick={signOutStart}> SIGN OUT </OptionLink> : <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropDown />
        }
    </HeaderContainer>
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
