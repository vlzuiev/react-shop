import styled from 'styled-components';
import CustomButton from '../custom-button/cutom-button.component';

export const ItemWrapper = styled.div`
    display: flex;  
    flex-wrap: wrap;
    border-top: 1px solid darkgrey;
    margin-top: 20px; 

    &:first-child{
        margin-top: 0; 
    }
`;

export const ItemList = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex; 
    font-size: 20px;  
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;

export const ItemColumn = styled.div`
    width: 33.3%;
    flex-grow: 1;
    &:last-child{
        text-align: center;
    }
`;

export const ItemTextBold = styled.h4`
    font-weight: bold;
    margin: 0;
`;

export const ItemText = styled.p`
    text-align: center;
    margin: 0;
`;

export const ItemImg = styled.img`
    width: 50%; 
`;

export const ItemLinkButton = styled.button` 
    text-decoration: underline;
    color: red;
    border: none;
    padding: 0;
    cursor: pointer;
    &:hover{
        color: blue;
    }
`;

export const Button = styled(CustomButton)`
    margin-left: auto;
`;