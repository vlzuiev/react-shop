import { connect } from 'react-redux';
import Profile from './profile.component';
import { changePasswordStart } from '../../redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectErrMessage } from '../../redux/user/user.selectors';
import { clearErrorMessage } from '../../redux/user/user.action';
import { closeNotification } from '../../redux/notification/notification.actions';
import { selectIsOpen, selectType } from '../../redux/notification/notification.selectors';

const mapDispatchToProps = dispatch => ({
    changePasswordStart: passwords => dispatch(changePasswordStart(passwords)),
    clearErrorMessage: () => dispatch(clearErrorMessage()),
    closeNotification: () => dispatch(closeNotification())
});

const mapStateToProps = createStructuredSelector({
    errorMessage: selectErrMessage,
    open: selectIsOpen,
    type: selectType
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile)