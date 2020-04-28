import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import { forgotEmailStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
import { PageWrapper, Container } from './forgot-password.styles';
import CustomButton from '../../components/custom-button/cutom-button.component';

const ForgotPasswordPage = ({ forgotEmailStart }) => {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        forgotEmailStart(email);
    }

    return <PageWrapper>
        <Container>
            <form onSubmit={handleSubmit}>
                <h1>Forgot you passwort? Don't worry. </h1>
                <h3>Please enter your email</h3>
                <FormInput name='email' type='email' handleChange={handleChange} value={email} label='Email' required />

                <CustomButton type='submit'>Change email</CustomButton>
            </form>
        </Container>
    </PageWrapper>
}

const mapDispatchToProps = dispatch => ({
    forgotEmailStart: (email) => dispatch(forgotEmailStart(email))
});

export default connect(null, mapDispatchToProps)(ForgotPasswordPage);