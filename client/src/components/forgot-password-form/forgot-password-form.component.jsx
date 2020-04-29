import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CustomButton from '../custom-button/cutom-button.component'; 
import FormInput from '../form-input/form-input.component'; 
import { forgotEmailStart } from '../../redux/user/user.action';
import { Form } from './forgot-password-form.styles';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(forgotEmailStart(email));
    } 

    return <Form onSubmit={handleSubmit}>
        <h1>Forgot you passwort? Don't worry. </h1>
        <h3>Please enter your email</h3>
        <FormInput name='email' type='email' handleChange={handleChange} value={email} label='Email' required />

        <CustomButton type='submit'>Change password</CustomButton>
    </Form>
} 

export default ForgotPasswordForm;