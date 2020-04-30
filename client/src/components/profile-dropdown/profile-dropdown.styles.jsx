import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom'

const animateShowUp = keyframes`
    0% { height: 0px; padding: 0; }
    100% { height: 200px; padding: 20;  }
`;

const animateHide = keyframes`
    0% { height: 200px; padding: 20; }
    100% { height: 0px; padding: 0; }
`;

export const DropDownWrapper = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: #fff; 
    top: 90px;
    right: 170px;
    z-index: 5;  
    padding: 20px; 
    overflow: hidden;
    display: flex;
    border: 1px solid black;
    flex-direction: column;
    animation: ${ props => (props.show ? css`${animateShowUp} .2s linear` : css`${animateHide} .2s linear`) };
`;


export const Item = styled(Link)`
    height: 50px;
    width: 100%; 
    padding-top: 15px;
    text-align: center;
    cursor: pointer;
    transition: background-color .5s ease-in-out;
    &:hover { 
        background-color: rgba(135, 134, 134, .5);
    }
`;

export const ItemWithIcon = styled(Item)` 
    .react-icons {  
        margin-right: 10px
    }
`;
