import ProfilePersonal from './profile-personal.component';
import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect'; 
import { selectCurrentUser } from '../../redux/user/user.selectors';
 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(ProfilePersonal);