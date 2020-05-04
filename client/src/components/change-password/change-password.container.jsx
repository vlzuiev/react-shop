import ChangePassword from './change-password.component';
import { connect } from 'react-redux';
import React from 'react';
import { changePasswordStart } from '../../redux/user/user.action';

const mapDispatchToProps = dispatch => ({
    changePasswordStart: passwords => dispatch(changePasswordStart(passwords))
});

export default React.memo(connect(null, mapDispatchToProps)(ChangePassword));