import React from 'react';
import { DropDownWrapper, Item, ItemWithIcon } from './profile-dropdown.styles';
import { AiOutlinePoweroff } from 'react-icons/ai'; 

const ProfileDropDown = ({ signOutStart }) => (
    <DropDownWrapper>
        <Item to='/profile'>Profile</Item>
        <Item to='/'>History</Item>
        <ItemWithIcon to='#'onClick={signOutStart}><AiOutlinePoweroff />Logout</ItemWithIcon>
    </DropDownWrapper>
)

export default ProfileDropDown;