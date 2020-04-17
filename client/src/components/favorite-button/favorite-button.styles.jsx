import styled from 'styled-components';
import { IoIosHeart } from 'react-icons/io';

export const ButtonWrapper = styled.button`
    width: 30px;
    text-align: center;
    height: 30px;
    padding-top: 3px; 
    display: flex;
    position: absolute;
    border-radius: 25px;
    cursor: pointer;
    border: none;
    background-color: ${props => props.isactive ? '#ddd' : 'white'};
    &:hover{
        background-color: #ddd;
    }
    &:focus{
        outline: none;
    }
`;

export const Icon = styled(IoIosHeart)`
    color: ${props => props.isactive ? 'white' : 'black'};
    font-size: 20px;
`;