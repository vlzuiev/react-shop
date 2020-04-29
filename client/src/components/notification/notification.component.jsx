import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Notifiaction = ({ children, open, handleClose, ...props }) => (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} elevation={6} variant="filled" {...props} >
            {children}
        </MuiAlert>
    </Snackbar>
); 

export default Notifiaction;