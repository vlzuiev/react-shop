import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/cutom-button.component';
import './sign-up.styles.scss';

import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.action';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {signUpStart} = this.props;
        const { displayName, email, password, confirmPassword} = this.state;
     
        if(password !== confirmPassword){
            alert('passwords don\'t match');
            return;
        }
        signUpStart({displayName, email, password});
        
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (<div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName' value={this.state.displayName} onChange={this.handleChange} label='Display Name' required/>
                <FormInput type='email' name='email' value={this.state.email} onChange={this.handleChange} label='Email' required/>
                <FormInput type='password' name='password' value={this.state.password} onChange={this.handleChange} label='Password' required/>
                <FormInput type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>)
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (data) => dispatch(signUpStart(data))
});

export default connect(null, mapDispatchToProps)(SignUp);