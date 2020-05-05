import React, { useEffect, lazy, Suspense } from 'react';
import { ProfileWrapper, ProfileColumn60, ProfileColumn40 } from './profile.styles';
import { Route } from 'react-router-dom';
import Notification from '../../components/notification/notification.component'; 

import ProfileMenu from '../../components/profile-menu/profile-menu.component';
import Spinner from '../../components/spinner/spinner.component';
const ProfilePersonalSubPage = lazy(() => import('../../components/profile-personal/profile-personal.container'));

const Profile = ({ errorMessage, open, type, closeNotification, clearErrorMessage, match }) => {

    useEffect(() => {
        return () => clearErrorMessage();
    }, [clearErrorMessage]);   

    return <ProfileWrapper>
            <Notification severity={type} open={open} handleClose={closeNotification}>
                {errorMessage ? errorMessage.toString() : 'Password was changed'}
            </Notification>
            <ProfileColumn60>  
                <Suspense fallback={<Spinner />}>
                    <Route exact path={`${match.path}`} component={ProfilePersonalSubPage} />
                    <Route exact path={`${match.path}/history`} render={() => <div> HISTORY PAGE</div>} /> 
                </Suspense> 
            </ProfileColumn60> 
            <ProfileColumn40> 
                <ProfileMenu />  
            </ProfileColumn40> 
        </ProfileWrapper> 
} 

export default Profile;