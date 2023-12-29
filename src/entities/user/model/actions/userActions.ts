import { createUser } from '../../api/userApi/createUser/createUser';
import { getUsers } from '../../api/userApi/getUsers/getUsers';
import { selectGetUsersPage, selectUserToken } from '../selectors/selectUsersState';
import { useUserStore } from '../stores/userStore/userStore';
import { UserStoreActions } from '../types/userStoreSchema';
const { setState, getState } = useUserStore;

export const userActions: UserStoreActions = {
  setUsers: (initialUsers) => {
    setState(() => ({ users: initialUsers }));
  },
  setToken: (token) => {
    setState({ token });
  },
  getUsers: async (params) => {
    setState(() => ({ getUsersLoading: true }));

    const userData = await getUsers(params);

    setState((state) => ({
      users: userData.users,
      usersPage: userData.page,
      hasMore: userData.total_users > state.users.length,
      getUsersLoading: false,
    }));

    return userData;
  },
  getNextUsers: async (count) => {
    const page = selectGetUsersPage(getState());

    setState(() => ({ getUsersLoading: true }));

    const userData = await getUsers({ count, page: page + 1 });

    setState((state) => ({
      users: [...state.users, ...userData.users],
      usersPage: userData.page,
      hasMore: userData.total_users > state.users.length,
      getUsersLoading: false,
    }));

    return userData;
  },
  createUser: async (dto) => {
    setState(() => ({ createUserLoading: true }));
    const token = selectUserToken(getState());

    const createUserResponse = await createUser(dto, token);

    setState({ createUserLoading: false });

    if (createUserResponse.success) {
      setState({ isRegistered: true });
    }

    return createUserResponse;
  },
};
