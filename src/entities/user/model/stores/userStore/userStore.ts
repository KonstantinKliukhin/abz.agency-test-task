import { create } from 'zustand';

import { UserStoreState } from '../../types/userStoreSchema';

export const useUserStore = create<UserStoreState>(
  () => ({
    isRegistered: false,
    users: [],
    getUsersLoading: false,
    getUsersError: null,
    createUserLoading: false,
    createUserError: null,
    usersPage: 1,
    token: '',
    hasMore: true,
  }));
