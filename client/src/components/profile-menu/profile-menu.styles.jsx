import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuWrapper = styled.div`
    display: flex;
    text-align: right;
    flex-direction: column;
    margin-left: auto; 
    margin-right: auto; 
`;

export const MenuItem = styled(Link)`
    border-bottom: 1px solid black; 
    padding: 20px 0 20px 0;
    text-align: end;
    transition: border-bottom-color .2s ease-in-out;
    &:hover{ 
        border-bottom-color: #ddd;
    }
`;