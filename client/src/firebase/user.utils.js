import { auth, getCurrentUser } from './firebase.utils';

export const sendEmailResetEmail = async email => { 
    if(!email) return;

    const formatEmail = email.toLowerCase().trim();
    
    await auth.sendPasswordResetEmail(formatEmail)
    .then(() => true)
    .catch(() => false);
};

export const updateUserPassword = async newPass => { 
    if(!newPass) return;

    const currentUser = getCurrentUser();
    if(!currentUser) return;

    currentUser.updatePassword(newPass)
    .then(() => true)
    .catch(() => false); 
};