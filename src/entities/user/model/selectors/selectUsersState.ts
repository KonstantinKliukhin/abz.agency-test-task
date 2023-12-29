import { UserStoreState } from '../types/userStoreSchema';

export const selectUsersState = (state: UserStoreState) => state.users;
export const selectGetUsersIsLoading = (state: UserStoreState) => state.getUsersLoading;
export const selectGetUsersError = (state: UserStoreState) => state.getUsersError;
export const selectGetUsersHasMore = (state: UserStoreState) => state.hasMore;
export const selectGetUsersPage = (state: UserStoreState) => state.usersPage;

export const selectIsRegistered = (state: UserStoreState) => state.isRegistered;
export const selectCreateUserIsLoading = (state: UserStoreState) => state.createUserLoading;
export const selectCreateUserError = (state: UserStoreState) => state.createUserError;
export const selectUserToken = (state: UserStoreState) => state.token;
