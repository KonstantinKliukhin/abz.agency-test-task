'use client';
import { memo } from 'react';

import { User } from '../../model/types/user';
import { AppTooltip, Avatar, Card, Typography, VStack } from '@shared/ui';

import cls from './UserCard.module.scss';

interface UserCardProps {
    user: User;
}

export const UserCard = memo<UserCardProps>(function UserCard(props) {
  return (
    <Card className={cls.card}>
      <VStack align="center" gapY={20}>
        <Avatar src={props.user.photo} size={70} />
        <AppTooltip overlay={<Typography color="secondary">{props.user.name}</Typography>}>
          <Typography align="center" ellipsis>{props.user.name}</Typography>
        </AppTooltip>
        <div className={cls.textWrapper}>
          <Typography align="center" ellipsis>
            {props.user.position}
          </Typography>
          <AppTooltip overlay={<Typography color="secondary">{props.user.email}</Typography>}>
            <Typography align="center" ellipsis>
              {props.user.email}
            </Typography>
          </AppTooltip>
          <Typography align="center" ellipsis>
            {props.user.phone}
          </Typography>
        </div>
      </VStack>
    </Card>
  );
});
