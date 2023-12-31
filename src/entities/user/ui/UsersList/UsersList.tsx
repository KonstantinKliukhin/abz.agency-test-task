'use client';
import clsx from 'clsx';
import { memo } from 'react';

import { User } from '../../model/types/user';
import { UserCard } from '../UserCard/UserCard';

import cls from './UsersList.module.scss';

interface UsersListProps {
    className?: string;
    users: User[];
}

export const UsersList = memo<UsersListProps>(function UsersList(props) {
  return (
    <div className={clsx(cls.cardsGrid, props.className)}>
      {props.users.map(user => (
        <UserCard key={user.id} user={user}/>
      ))}
    </div>
  );
});
