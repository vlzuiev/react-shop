import React from 'react';

import './signinup.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInUp = () => { 
    return <div className='sign-in-and-sign-up'><SignIn/><SignUp/></div>
}

export default SignInUp;