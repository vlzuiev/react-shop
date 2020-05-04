import React, { useState, useEffect } from 'react';
import { ProfileWrapper } from './profile.styles';
import FormInput from '../../components/form-input/form-input.component'; 
import CustomButton from '../../components/custom-button/cutom-button.component';
import Notification from '../../components/notification/notification.component';

const Profile = ({ changePasswordStart, errorMessage, open, type, closeNotification, clearErrorMessage }) => {
    const [passwords, setPasswords] = useState({ oldPassword: '', newPassword: '', newRepeatPassword: '' });
    const {oldPassword, newPassword, newRepeatPassword} = passwords;

    useEffect(() => {
        return () => clearErrorMessage();
    }, [clearErrorMessage]); 

    const handleSubmit = async event => {
        event.preventDefault();
        changePasswordStart(passwords);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setPasswords({ ...passwords, [name]: value });
    } 

    return <ProfileWrapper>
            <Notification severity={type} open={open} handleClose={closeNotification}>
                {errorMessage ? errorMessage.toString() : 'Password was changed'}
            </Notification>
            <form onSubmit={handleSubmit}>
                <FormInput name='oldPassword' type='password' handleChange={handleChange} value={oldPassword} label='Old password' required />
                <FormInput name='newPassword' type='password' handleChange={handleChange} value={newPassword} label='New password' required /> 
                <FormInput name='newRepeatPassword' type='password' handleChange={handleChange} value={newRepeatPassword} label='Repeat New password' required /> 
                <CustomButton type='submit'>Change</CustomButton>
            </form>
        </ProfileWrapper> 
} 

export default Profile;