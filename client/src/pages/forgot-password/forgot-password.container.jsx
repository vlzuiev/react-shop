import ForgotPasswordPage from './forgot-password.component'
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading, selectErrMessage } from '../../redux/user/user.selectors';
import { selectIsOpen, selectType } from '../../redux/notification/notification.selectors';
// import withSpinner from '../../components/with-spinner/with-spinner.component';
import { forgotEmailStart, clearErrorMessage } from '../../redux/user/user.action';
import { closeNotification } from '../../redux/notification/notification.actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    forgotEmailStart: (email) => dispatch(forgotEmailStart(email)),
    clearErrorMessage: () => dispatch(clearErrorMessage()),
    closeNotification: () => dispatch(closeNotification())
});

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading,
    errorMessage: selectErrMessage,
    open: selectIsOpen,
    type: selectType
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withSpinner
)(ForgotPasswordPage);