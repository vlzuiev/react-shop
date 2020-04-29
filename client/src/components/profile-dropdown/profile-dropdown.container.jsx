import { signOutStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
import ProfileDropDown from './profile-dropdown.component';  

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});
 
export default connect(null, mapDispatchToProps)(ProfileDropDown)