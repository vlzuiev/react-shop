import React, { useEffect } from 'react';
import { ProfileWrapper, ProfileColumn60, ProfileColumn40 } from './profile.styles';

import Notification from '../../components/notification/notification.component'; 
import ProfilePersonal from '../../components/profile-personal/profile-personal.container'; 
import ProfileMenu from '../../components/profile-menu/profile-menu.component';
const Profile = ({ errorMessage, open, type, closeNotification, clearErrorMessage }) => {

    useEffect(() => {
        return () => clearErrorMessage();
    }, [clearErrorMessage]);   

    return <ProfileWrapper>
            <Notification severity={type} open={open} handleClose={closeNotification}>
                {errorMessage ? errorMessage.toString() : 'Password was changed'}
            </Notification>
            <ProfileColumn60> 
                <ProfilePersonal />  
            </ProfileColumn60> 
            <ProfileColumn40> 
                <ProfileMenu />  
            </ProfileColumn40> 
        </ProfileWrapper> 
} 

export default Profile;