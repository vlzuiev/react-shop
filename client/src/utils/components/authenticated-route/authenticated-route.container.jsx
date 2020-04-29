import { connect } from 'react-redux';
import AuthenticatedRoute from './authenticated-route.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../redux/user/user.selectors';  

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(AuthenticatedRoute);
