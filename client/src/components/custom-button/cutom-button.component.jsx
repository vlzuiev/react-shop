import React from 'react';
import { ButtonContainer } from './custom-button.styles'

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {  
    return <ButtonContainer isGoogleSignIn={isGoogleSignIn} inverted={inverted} {...otherProps}>
        {children}
    </ButtonContainer>
} 

export default CustomButton; 