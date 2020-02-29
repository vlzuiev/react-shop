import React, { useEffect } from 'react';
import { selectErrMessage, selectIsLoading } from '../../redux/user/user.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component'

import './signinup.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInUp = ({ errorMessage, isLoading }) => {
    useEffect(() => {
        if(errorMessage !== null)
            alert(errorMessage.message)
    }, [errorMessage])
 
    return <div className='sign-in-and-sign-up'>
        <SignIn /><SignUp />
    </div>
}

const mapStateToProps = createStructuredSelector({
    errorMessage: selectErrMessage,
    isLoading: selectIsLoading
});


export default connect(mapStateToProps)(WithSpinner(SignInUp));