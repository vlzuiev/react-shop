import React from 'react';
import { ButtonWrapper } from './favorite-button.styles';
import { Icon } from './favorite-button.styles'

const FavoriteButton = ({ className, ...otherProps }) => {
  
    return <ButtonWrapper className={className} {...otherProps}>
        <Icon />
    </ButtonWrapper>
}

export default FavoriteButton;