import NotificationActionTypes from './notification.types';

export const showNotification = type => ({
    type: NotificationActionTypes.SHOW_NOTIFICATION,
    payload: type
});

export const closeNotification = () => ({
    type: NotificationActionTypes.CLOSE_NOTIFICATION
});
 