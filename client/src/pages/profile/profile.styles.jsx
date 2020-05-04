import styled, { css } from 'styled-components';

const columnDefault = css`
    display: flex;
    flex-direction: column;
`;
export const ProfileWrapper = styled.div` 
    display: flex;  
    margin: 50px auto 0;
`;

export const ProfileColumn60 = styled.div`
     ${columnDefault}
    width: 60%;
`;

export const ProfileColumn50 = styled.div`
    ${columnDefault}
    width: 50%;
`;

export const ProfileColumn40 = styled.div`
    ${columnDefault}
    width: 40%;
`;

export const ProfileColumn20 = styled.div`
     ${columnDefault}
    width: 20%;
`;

