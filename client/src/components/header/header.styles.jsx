import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media (max-width: 800px){ 
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(NavLink)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media (max-width: 800px){ 
        width: 50px;
        padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 800px){ 
        width: 80%; 
    }
`;

export const Option = styled.div`
    padding: 10px 15px;
    cursor: pointer; 
`;

export const OptionLink = styled(NavLink)`
    padding: 10px 15px;
    cursor: pointer;
    &.${(props) => props.activeClassName} {
        font-weight: bold;
      }
`;

OptionLink.defaultProps = {
    activeClassName: 'active',
};
 