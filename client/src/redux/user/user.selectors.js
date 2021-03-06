import {createSelector} from 'reselect'

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    selectUser,
    user => user.currentUser
);

export const selectErrMessage = createSelector(
    selectUser,
    user => user.errorMessage
);

export const selectIsLoading = createSelector(
    selectUser,
    user => user.isLoading
);

export const selectShowMenu = createSelector(
    selectUser,
    user => user.showMenu
);

export const selectUserEmail = createSelector(
    selectCurrentUser,
    currentUser => currentUser.email
);