import { auth } from './firebase.utils';

export const sendEmailResetEmail = async email => { 
    if(!email) return;

    const formatEmail = email.toLowerCase().trim();
    
    await auth.sendPasswordResetEmail(formatEmail).then(res => {  
        return res;
    }).catch((error) => {
        console.log(`Cannot send password reset email ${error}`);
    });
}