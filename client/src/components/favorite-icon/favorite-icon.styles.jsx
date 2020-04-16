import styled from 'styled-components';
import { IoIosHeart } from 'react-icons/io';

export const IconWrapper = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const CountCircle = styled.span` 
    position: absolute;
    background-color: white;
    width: 20px;
    top: 0%;
    left: 0%;
    height: 20px;
    padding-top: 2px;
    border-radius: 25px;
    text-align: center;
    border: 1px solid black;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px; 
`;


export const Icon = styled(IoIosHeart)`
    color: black;
    font-size: 20px;
`;