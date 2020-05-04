import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../custom-button/cutom-button.component';

const ChangePassword = ({ changePasswordStart }) => {
    const [passwords, setPasswords] = useState({ oldPassword: '', newPassword: '', newRepeatPassword: '' });
    const {oldPassword, newPassword, newRepeatPassword} = passwords;

    const handleSubmit = async event => {
        event.preventDefault();
        changePasswordStart(passwords);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setPasswords({ ...passwords, [name]: value });
    } 

    return <form onSubmit={handleSubmit}>
        <FormInput name='oldPassword' type='password' handleChange={handleChange} value={oldPassword} label='Old password' required />
        <FormInput name='newPassword' type='password' handleChange={handleChange} value={newPassword} label='New password' required />
        <FormInput name='newRepeatPassword' type='password' handleChange={handleChange} value={newRepeatPassword} label='Repeat New password' required />
        <CustomButton type='submit'>Change</CustomButton>
    </form>
}

export default ChangePassword;