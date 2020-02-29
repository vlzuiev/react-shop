import {createSelector} from 'reselect'

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    selectUser,
    user => user.currentUser
)

export const selectErrMessage = createSelector(
    selectUser,
    user => user.errorMessage
)

export const selectIsLoading = createSelector(
    selectUser,
    user => user.isLoading
)