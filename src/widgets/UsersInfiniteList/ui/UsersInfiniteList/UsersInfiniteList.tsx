'use client';
import { memo, useCallback, useEffect } from 'react';

import { selectGetUsersIsLoading, selectUsersState, User, userActions, UsersList, useUserStore } from '@entities/user';
import { selectGetUsersHasMore } from '@entities/user/model/selectors/selectUsersState';
import { Button, Loader, VStack } from '@shared/ui';

interface UsersInfiniteListProps {
    className?: string;
    initialUsers: User[];
    initialPage: number;
    initialCount: number;
}

export const UsersInfiniteList = memo<UsersInfiniteListProps>(
  function UsersInfiniteList(props) {
    const isLoading = useUserStore(selectGetUsersIsLoading);
    const hasMore = useUserStore(selectGetUsersHasMore);
    const users = useUserStore(selectUsersState);

    useEffect(() => {
      userActions.setUsers(props.initialUsers);
    }, [props.initialUsers]);

    const onLoadNextUsers = useCallback(async () => {
      userActions.getNextUsers(props.initialCount);
    }, [props.initialCount]);

    return (
      <VStack gapY={50}>
        <UsersList users={users?.length > 0 ? users : props.initialUsers}/>
        {isLoading ? <Loader/> : null}
        {hasMore
          ? <Button disabled={isLoading} size="m" onClick={onLoadNextUsers}>
            Show more
          </Button>
          : null
        }
      </VStack>
    );
  });
