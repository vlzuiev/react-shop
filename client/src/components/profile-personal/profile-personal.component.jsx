import React, { useState, useEffect } from 'react'; 
import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../custom-button/cutom-button.component';
import { TitleText } from './profile-personal.styles';
import ChangePassword from '../change-password/change-password.container';
const ProfilePresonal = ({ currentUser }) => {
    const [personalData, setPersonalData] = useState({ displayName: '', email: '' });
    
    const [showChangePassword, setShowChangePassword] = useState(false);
    const {displayName, email} = personalData;
    
    useEffect(() => {
        setPersonalData(currentUser)
    }, [setPersonalData, currentUser]);
    
    const handleChange = event => {
        const { value, name } = event.target;
        setPersonalData({ ...personalData, [name]: value });
    }
 
    return <form> 
        <TitleText>Personal Information</TitleText>
        <FormInput name='displayName' type='text' handleChange={handleChange} value={displayName} label='Display Name' required /> 
        <TitleText>Login Data</TitleText>
        <FormInput name='email' type='email' handleChange={handleChange} value={email} label='Email' required /> 

        <CustomButton type='button' onClick={() => setShowChangePassword(!showChangePassword)}>Change Password</CustomButton>
        <ChangePassword show={showChangePassword} />

        <CustomButton type='submit'>Submit Changes</CustomButton>
    </form>
};

export default ProfilePresonal;