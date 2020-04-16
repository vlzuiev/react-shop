import FavoriteButton from '../favorite-button/favorite-button.component';
import styled from 'styled-components';

export const Button = styled(FavoriteButton)`
    left: 5px;
    top: 5px;
    display: none; 
    background-color: ${props => props.isActive ? "#ddd" : null};
    cursor: ${props => props.isActive ? "unset" : null};
    &:hover{
        background-color: ${props => props.isActive ? "#ddd" : null};
 
    }

`;