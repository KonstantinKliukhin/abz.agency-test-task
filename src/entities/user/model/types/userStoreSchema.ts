import { createUser } from '../../api/userApi/createUser/createUser';
import { getUsers } from '../../api/userApi/getUsers/getUsers';

import { CreateUserDto } from './createUserDto';
import { User } from './user';

export interface UserStoreState {
    users: User[];
    getUsersLoading: boolean;
    getUsersError: null | string;
    hasMore: boolean;
    token: string;
    usersPage: number;
    createUserLoading: boolean;
    createUserError: null | string;
    isRegistered: boolean;
}

export interface UserStoreActions {
    createUser: (dto: CreateUserDto) => ReturnType<typeof createUser>;
    setUsers: (initialUsers: User[]) => void;
    setToken: (token: string) => void;
    getUsers: (params: Parameters<typeof getUsers>[0]) => ReturnType<typeof getUsers>;
    getNextUsers: (count: number) => ReturnType<typeof getUsers>;
}

export interface UserStoreSchema extends UserStoreState, UserStoreActions {}
