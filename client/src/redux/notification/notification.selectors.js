import { createSelector } from 'reselect'

const selectNotification = state => state.notification;

export const selectIsOpen = createSelector(
    selectNotification,
    notification => notification.open
);

export const selectType = createSelector(
    selectNotification,
    notification => notification.type
);