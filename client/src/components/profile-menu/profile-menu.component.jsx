import React from 'react';

import { MenuWrapper, MenuItem } from './profile-menu.styles';
const ProfileMenu = () => { 
    return <MenuWrapper> 
        <MenuItem to='/profile'>Profile Data</MenuItem>
        <MenuItem to='/profile/history'>History</MenuItem> 
     </MenuWrapper>
}

export default ProfileMenu;