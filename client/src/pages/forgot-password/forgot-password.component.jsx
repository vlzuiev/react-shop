import React, { useEffect } from 'react';
import { PageWrapper, Container } from './forgot-password.styles';
import Notification from '../../components/notification/notification.component';
import ForgotPasswordForm from '../../components/forgot-password-form/forgot-password-form.component';

const ForgotPasswordPage = ({ errorMessage, clearErrorMessage, open, type, closeNotification }) => {
    useEffect(() => {
        return () => clearErrorMessage();
    }, [errorMessage, clearErrorMessage]);

    return <PageWrapper>
        <Container>
            <Notification severity={type} open={open} handleClose={closeNotification}>
                {errorMessage ? errorMessage.toString() : 'Password reset email was sent'}
            </Notification>

            <ForgotPasswordForm />
        </Container>
    </PageWrapper>
} 

export default ForgotPasswordPage;
