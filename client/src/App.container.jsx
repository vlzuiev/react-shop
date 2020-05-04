import { connect } from 'react-redux';
import App from './App';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.action';


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)
    (App);