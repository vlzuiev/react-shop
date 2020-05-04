import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component'; 
import { ChangePasswordWrapper } from './change-password.styles';
const ChangePassword = ({ changePasswordStart, show }) => {
    const [passwords, setPasswords] = useState({ oldPassword: '', newPassword: '', newRepeatPassword: '' });
    const { oldPassword, newPassword, newRepeatPassword } = passwords;
  
    // const handleSubmit = async event => {
    //     event.preventDefault();
    //     changePasswordStart(passwords);
    // }

    const handleChange = event => {
        const { value, name } = event.target;
        setPasswords({ ...passwords, [name]: value });
    }

    return show && <ChangePasswordWrapper>
        <FormInput name='oldPassword' type='password' handleChange={handleChange} value={oldPassword} label='Old password' required />
        <FormInput name='newPassword' type='password' handleChange={handleChange} value={newPassword} label='New password' required />
        <FormInput name='newRepeatPassword' type='password' handleChange={handleChange} value={newRepeatPassword} label='Repeat New password' required />
    </ChangePasswordWrapper> 
}

export default ChangePassword;