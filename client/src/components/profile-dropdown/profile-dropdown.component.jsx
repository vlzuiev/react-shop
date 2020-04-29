import React from 'react';
import { DropDownWrapper, Item, ItemWithIcon } from './profile-dropdown.styles';
import { AiOutlinePoweroff } from 'react-icons/ai'; 

const ProfileDropDown = ({ signOutStart }) => (
    <DropDownWrapper>
        <Item>Profile</Item>
        <Item>History</Item>
        <ItemWithIcon onClick={signOutStart}><AiOutlinePoweroff />Logout</ItemWithIcon>
    </DropDownWrapper>
)

export default ProfileDropDown;