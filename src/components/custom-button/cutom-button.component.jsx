import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    return <button className={`${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}> {children}</button>
}


export default CustomButton;


// import React from 'react';
// import { ButtonContainer } from './custom-button.styles'

// const CustomButton = ({children, ...props}) => {
//     return <ButtonContainer  {...props}> {children}</ButtonContainer>
// } 

// export default CustomButton;