import styled, { keyframes } from 'styled-components';

const animateShowUp = keyframes`
    0% { height: 0px; }
    100% { height: 200px; }
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
    animation: ${animateShowUp} .5s linear;
`;


export const Item = styled.div`
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
