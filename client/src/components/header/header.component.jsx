import React  from 'react'; 
import { ReactComponent as Logo } from '../../assets/crown.svg'; 
import { FaUser } from 'react-icons/fa';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, Option } from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import FavoriteIcon from '../favorite-icon/favorite-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.container'; 
import ProfileDropDown from '../profile-dropdown/profile-dropdown.container';
 
const Header = ({ currentUser, hidden, showMenu, toggleShowMenu }) => {
    return <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>  
            <OptionLink to='/contact'>CONTACT</OptionLink> 
            {
                currentUser ? <Option onClick={toggleShowMenu}><FaUser /></Option> : <OptionLink to='/signin'>SIGN IN</OptionLink>
            } 
            <FavoriteIcon /> 
            <CartIcon />
        </OptionsContainer>
        { hidden ? null : <CartDropDown /> }
        <ProfileDropDown show={showMenu} />
    </HeaderContainer>
}

export default Header;
