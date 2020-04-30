import React, { useState, useEffect } from 'react';
import { DropDownWrapper, Item, ItemWithIcon } from './profile-dropdown.styles';
import { AiOutlinePoweroff } from 'react-icons/ai';

const ProfileDropDown = ({ show, signOutStart }) => {
    const [shouldRender, setRender] = useState(show);

    useEffect(() => {
        if (show) setRender(true);
    }, [show]);

    const onAnimationEnd = () => {
        if (!show) setRender(false);
    };

    return  shouldRender && <DropDownWrapper show={show} onAnimationEnd={onAnimationEnd}>
        <Item to='/profile'>Profile</Item>
        <Item to='/'>History</Item>
        <ItemWithIcon to='#' onClick={signOutStart}><AiOutlinePoweroff />Logout</ItemWithIcon>
    </DropDownWrapper>
}
export default ProfileDropDown;