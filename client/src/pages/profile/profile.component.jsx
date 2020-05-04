import React, { useEffect } from 'react';
import { ProfileWrapper } from './profile.styles';

import Notification from '../../components/notification/notification.component'; 
import ChangePassword from '../../components/change-password/change-password.container'; 

const Profile = ({ errorMessage, open, type, closeNotification, clearErrorMessage }) => {

    useEffect(() => {
        return () => clearErrorMessage();
    }, [clearErrorMessage]);   

    return <ProfileWrapper>
            <Notification severity={type} open={open} handleClose={closeNotification}>
                {errorMessage ? errorMessage.toString() : 'Password was changed'}
            </Notification> 

            <ChangePassword /> 
        </ProfileWrapper> 
} 

export default Profile;