import styled from 'styled-components';
import { IoIosHeart } from 'react-icons/io';

export const ButtonWrapper = styled.button`
    width: 30px;
    text-align: center;
    height: 30px;
    padding-top: 3px;
    background-color: white;
    display: flex;
    position: absolute;
    border-radius: 25px;
    cursor: pointer;
    border: none;
    &:hover {
        background-color: #ddd;
    }
`;

export const Icon = styled(IoIosHeart)`
    color: black;
    font-size: 20px;
`;