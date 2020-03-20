import React, { useState } from 'react';
import './sign-in.styles.scss';
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/cutom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'

const SignIn = ({emailSignInStart , googleSignInStart}) => { 
    const [userCredentials, setCredetials] = useState({ email: '', password: ''}); 
    const { email, password } = userCredentials; 

    const handleSubmit = async event => {
        event.preventDefault(); 
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target; 
        setCredetials({...userCredentials, [name]: value });
    }  

    return <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            <FormInput name='email' type='email' handleChange={handleChange} value={email} label='Email' required />

            <FormInput name='password' type='password' handleChange={handleChange} value={password} label='Password' required />
            <div className='buttons'>
                <CustomButton type='submit'>Sign in</CustomButton>
                <CustomButton onClick={googleSignInStart} isGoogleSignIn >Sign in with Google</CustomButton>
            </div>
        </form>
    </div>

}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});
export default connect(null, mapDispatchToProps)(SignIn);