import React, { useEffect } from 'react';
import { selectErrMessage } from '../../redux/user/user.selectors';
import { selectType, selectIsOpen } from '../../redux/notification/notification.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { closeNotification } from '../../redux/notification/notification.actions'
import Notification from '../../components/notification/notification.component';

import './signinup.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInUp = ({ errorMessage, open, type, closeNotification }) => {
    useEffect(() => {
        return () => {
            closeNotification()
        } 
    }, [closeNotification]);
 
    return <div className='sign-in-and-sign-up'>
        <Notification severity={type} open={open} handleClose={closeNotification}>
            {errorMessage && errorMessage.toString()}
        </Notification>
        <SignIn /><SignUp />
    </div>
}

const mapStateToProps = createStructuredSelector({
    errorMessage: selectErrMessage, 
    open: selectIsOpen,
    type: selectType
});

const mapDispatchToProps = dispatch => ({
    closeNotification: () => dispatch(closeNotification())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(SignInUp);