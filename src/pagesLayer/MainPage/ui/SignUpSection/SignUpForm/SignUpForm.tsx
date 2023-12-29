import React, { FC } from 'react';

import { UserPosition } from '@entities/userPosition';
import { AddUserForm } from '@features/AddUser';
import { Typography, VStack } from '@shared/ui';

interface SignUpFormProps {
  token: string;
  positions: UserPosition[];
}

export const SignUpForm: FC<SignUpFormProps> = props => {
  return (
    <VStack gapY={50}>
      <Typography as="h2" align="center">
        Working with POST request
      </Typography>
      <AddUserForm token={props.token} positions={props.positions}/>
    </VStack>
  );
};
